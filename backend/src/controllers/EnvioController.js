const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const { page = 1 } = req.query;

        const [count] = await connection('tbl_envio_imagem').count();

        const envios = await connection('tbl_envio_imagem')
            .join('tbl_usuario', 'tbl_usuario.id_usuario', '=', 'tbl_envio_imagem.id_usuario_fk')
            .join('tbl_analise','tbl_analise.id_envio_fk','=','tbl_envio_imagem.id_envio_imagem')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'tbl_usuario.nome_usuario',
                'tbl_usuario.sobrenome_usuario',
                'tbl_usuario.email_usuario',
                'tbl_usuario.data_nascimento_usuario',
                'tbl_usuario.telefone_usuario',
                'tbl_usuario.pais_usuario',
                'tbl_usuario.estado_usuario',
                'tbl_usuario.cidade_usuario',
                'tbl_envio_imagem.*',
                'tbl_analise.*',
                //'tbl_questionario.*'
            ]);

        res.header('X-Total-Count', count['count(*)']);

        return res.json(envios);
    },
    async plot(req, res) {

        const data = await connection.raw("SELECT substr(timestamp_envio, 0, 11) as 'data', count(timestamp_envio) as 'registros' from tbl_envio_imagem GROUP by substr(timestamp_envio, 0, 11)");
        return res.json(data);
        
    },
    async create(req, res) {
        const {
            nome,
            descricao,
            imagem,
        } = req.body;

        const id_usuario_fk = req.headers.authorization;

        function getTimestamp() {
            const day = (new Date()).getDate() < 10 ? '0'+(new Date()).getDate() : (new Date()).getDate();
            const month = (new Date()).getMonth() < 10 ? '0'+(new Date()).getMonth() : (new Date()).getMonth();
            const year = (new Date()).getFullYear();
            const hour = (new Date().getUTCHours() - 3) < 10 ? '0'+(new Date().getUTCHours() - 3) : (new Date().getUTCHours() - 3);
            const minute = (new Date()).getUTCMinutes() < 10 ? '0'+(new Date()).getUTCMinutes() : (new Date()).getUTCMinutes();
            const second = (new Date()).getUTCSeconds() < 10 ? '0'+(new Date()).getUTCSeconds() : (new Date()).getUTCSeconds();

            return (day +'/'+ month +'/'+ year +' '+ hour +':'+ minute +':'+ second).toString();
        }

        const timestamp_envio = getTimestamp();

        const [id] = await connection('tbl_envio_imagem').insert({
            id_usuario_fk,
            nome,
            descricao,
            imagem,
            timestamp_envio,
        });

        return res.json({
            id,
            timestamp_envio
        });

    },
    async delete(req, res) {
        const { id } = req.params;
        const id_usuario = req.headers.authorization;

        const envio = await connection('tbl_envio_imagem')
            .where('id_envio_imagem', id)
            .select('id_usuario_fk as idUser')
            .first();

        if (envio.idUser != id_usuario) {
            return res.status(401).json({ error: 'Operation not allowed.' });
        }

        await connection('tbl_envio_imagem').where('id_envio_imagem', id).delete();

        return res.status(204).send();
    },
    async list(req, res) {

        const id_usuario_fk = req.headers.authorization;

        const { page = 1 } = req.query;

        const [count] = await connection('tbl_envio_imagem').count();

        const envios = await connection('tbl_envio_imagem')
            .where('id_usuario_fk', id_usuario_fk)
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'tbl_envio_imagem.*',
            ]);

            res.header('X-Total-Count', count['count(*)']);

        return res.json(envios);
    }
};