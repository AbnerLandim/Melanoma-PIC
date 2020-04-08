const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { id } = req.body;

        const usuario = await connection('tbl_usuario')
        .where('id_usuario', id)
        .select('nome_usuario')
        .first();

        if(!usuario) {
            return res.status(400).json({ error: 'No user found with such ID.' });
        }

        return res.json(usuario);
    }
}