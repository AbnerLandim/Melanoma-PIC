const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const usuarios = await connection('tbl_usuario').select('*');
        return res.json(usuarios);
    },

    async create(req, res) {
        const { nome_usuario,
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
        })

        console.log(questionario_fk);

        return res.json({
            nome_usuario,
            questionario_fk,
        });
    }
};