const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const id_usuario_fk = req.headers.authorization;

        const envios = await connection('tbl_envio_imagem')
        .where('id_usuario_fk', id_usuario_fk)
        .select('*');

        return res.json(envios);
    }
}