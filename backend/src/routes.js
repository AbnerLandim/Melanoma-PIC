const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const EnvioController = require('./controllers/EnvioController');
const PerfilController = require('./controllers/PerfilController');
const SessaoController = require('./controllers/SessaoController');

const routes = express.Router();

routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.create);

routes.get('/envios', EnvioController.index);
routes.post('/envios', EnvioController.create);
routes.delete('/envios/:id', EnvioController.delete);

routes.get('/perfil', PerfilController.index);

routes.post('/sessoes', SessaoController.create);

module.exports = routes;