const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const EnvioController = require('./controllers/EnvioController');
const PerfilController = require('./controllers/PerfilController');
const SessaoController = require('./controllers/SessaoController');

const routes = express.Router();

routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.create);
routes.post('/reset-senha', UsuarioController.passReset);

routes.get('/envios', EnvioController.index);
routes.get('/envios_usuario', EnvioController.list);
routes.post('/envios', EnvioController.create);
routes.delete('/envios/:id', EnvioController.delete);

routes.get('/perfil', PerfilController.index);

routes.post('/sessoes', SessaoController.create);

module.exports = routes;