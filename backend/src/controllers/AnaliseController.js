const connection = require('../database/connection');

module.exports = {

    async create(req, res) {
        const {
            id_envio_fk,
            id_usuario_fk,
            assimetria,
            cores,
            risco,
        } = req.body;

        const [id] = await connection('tbl_analise').insert({
            id_envio_fk,
            id_usuario_fk,
            assimetria,
            cores,
            risco,
        });

        return res.json({
            id,
        })
    },
}