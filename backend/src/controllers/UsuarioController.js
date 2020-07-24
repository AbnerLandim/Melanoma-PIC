const connection = require('../database/connection');
const nodemailer = require('nodemailer');

module.exports = {

    async index(req, res) {
        const usuarios = await connection('tbl_usuario').select('*');
        return res.json(usuarios);
    },

    async passReset(req, res) {

        const mailClient = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '',
                pass: ''
            }
        });

        const email_usuario = req.body.user;

        const new_pass = (Math.floor(100000 + Math.random() * 900000)).toString();

        const user = await connection('tbl_usuario')
            .where('email_usuario', email_usuario)
            .select('nome_usuario')
            .first()

        await connection('tbl_usuario')
            .where('email_usuario', email_usuario)
            .update({
                senha_usuario: new_pass,
                thisKeyIsSkipped: undefined
            })
        
        const mailOptions = {
            from: 'picmelskin@gmail.com',
            to: email_usuario,
            subject: 'Password Reset',
            text: 'Hello, ' + user.nome_usuario + '! Here is your new password: "' + new_pass + '". Regards from Melskin team :)'
        };

        mailClient.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })

        return res.json(
            {
                new_pass,
                user
            }
        );
    },

    async plot(req, res) {

        const data = await connection.raw("\
        SELECT\
            CASE\
                WHEN (round((julianday('now') - julianday(tbl_usuario.data_nascimento_usuario))/365,2) < 18 AND tbl_usuario.sexo_usuario = 'False') THEN 'Under Age Female'\
                WHEN (round((julianday('now') - julianday(tbl_usuario.data_nascimento_usuario))/365,2) BETWEEN 18 AND 35 AND tbl_usuario.sexo_usuario = 'False') THEN 'Young Adult Female'\
                WHEN (round((julianday('now') - julianday(tbl_usuario.data_nascimento_usuario))/365,2) BETWEEN 36 AND 55 AND tbl_usuario.sexo_usuario = 'False') THEN 'Adult Female'\
                WHEN (round((julianday('now') - julianday(tbl_usuario.data_nascimento_usuario))/365,2) > 55 AND tbl_usuario.sexo_usuario = 'False') THEN 'Elderly Female'\
                WHEN (round((julianday('now') - julianday(tbl_usuario.data_nascimento_usuario))/365,2) < 18 AND tbl_usuario.sexo_usuario = 'True') THEN 'Under Age Male'\
                WHEN (round((julianday('now') - julianday(tbl_usuario.data_nascimento_usuario))/365,2) BETWEEN 18 AND 35 AND tbl_usuario.sexo_usuario = 'True') THEN 'Young Adult Male'\
                WHEN (round((julianday('now') - julianday(tbl_usuario.data_nascimento_usuario))/365,2) BETWEEN 36 AND 55 AND tbl_usuario.sexo_usuario = 'True') THEN 'Adult Male'\
                WHEN (round((julianday('now') - julianday(tbl_usuario.data_nascimento_usuario))/365,2) > 55 AND tbl_usuario.sexo_usuario = 'True') THEN 'Elderly Male'\
            END AS age_bin,\
            count(sexo_usuario) FILTER(where sexo_usuario = 'False') as 'female_qty',\
            count(sexo_usuario) FILTER(where sexo_usuario = 'True') as 'male_qty',\
            round(avg(tbl_analise.risco*100),2) as 'avrg_risk'\
        from tbl_usuario\
            join tbl_analise on tbl_usuario.id_usuario = tbl_analise.id_usuario_fk\
            GROUP BY age_bin\
            ORDER BY avrg_risk DESC");

        return res.json(data);
    },

    //receive the data
    async create(req, res) {
        const { 
                nome_usuario,
                sobrenome_usuario,
                email_usuario,
                senha_usuario,
                cpf_usuario,
                sexo_usuario,
                data_nascimento_usuario,
                telefone_usuario,
                pais_usuario,
                estado_usuario,
                cidade_usuario,
                role_usuario,
                pergunta_1_fk,
                pergunta_2_fk,
                pergunta_3_fk,
                pergunta_4,
                pergunta_5,
                pergunta_6,
                pergunta_7,
                pergunta_8,
                pergunta_9,
                pergunta_10,
                pergunta_11,
                pergunta_12,
                pergunta_13,
                pergunta_14,
                pergunta_15,
                pergunta_16,
                pergunta_17 } = req.body;

        //check existence
        const usuario = await connection('tbl_usuario')
            .where('email_usuario', email_usuario)
            .select('id_usuario', 'nome_usuario')
            .first();

        if (usuario) {
            return res.status(400).json({ error: 'This email is already registered.' });
        }
        else {
            //register user
            await connection('tbl_questionario').insert({
                pergunta_1_fk,
                pergunta_2_fk,
                pergunta_3_fk,
                pergunta_4,
                pergunta_5,
                pergunta_6,
                pergunta_7,
                pergunta_8,
                pergunta_9,
                pergunta_10,
                pergunta_11,
                pergunta_12,
                pergunta_13,
                pergunta_14,
                pergunta_15,
                pergunta_16,
                pergunta_17,
            })

            var max_questionario = await connection('tbl_questionario').max('id_questionario as maxId').first();
            var questionario_fk = max_questionario.maxId;

            await connection('tbl_usuario').insert({
                nome_usuario,
                sobrenome_usuario,
                email_usuario,
                senha_usuario,
                cpf_usuario,
                sexo_usuario,
                data_nascimento_usuario,
                telefone_usuario,
                pais_usuario,
                estado_usuario,
                cidade_usuario,
                questionario_fk,
                role_usuario,
            })

            console.log(questionario_fk);

            return res.json({
                nome_usuario,
                questionario_fk,
            });
        }
    }
};
