const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { email, password } = req.body;

        const usuario = await connection('tbl_usuario')
        .where('email_usuario', email)
        .andWhere('senha_usuario', password)
        .select('id_usuario','nome_usuario','role_usuario')
        .first();

        if(!usuario) {
            return res.status(400).json({ error: 'No user found with such credentials.' });
        }

        return res.json(usuario);
    }
}