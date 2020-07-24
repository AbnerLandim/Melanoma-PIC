const express = require('express');

//Controllers
const UsuarioController = require('./controllers/UsuarioController');
const EnvioController = require('./controllers/EnvioController');
const PerfilController = require('./controllers/PerfilController');
const SessaoController = require('./controllers/SessaoController');
const AnaliseController = require('./controllers/AnaliseController');

const routes = express.Router();

//Usuarios
routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.create);
routes.post('/reset-senha', UsuarioController.passReset);
routes.get('/usuarios/plot', UsuarioController.plot);

//Envios
routes.get('/envios', EnvioController.index);
routes.get('/envios_usuario', EnvioController.list);
routes.post('/envios', EnvioController.create);
routes.delete('/envios/:id', EnvioController.delete);
routes.get('/envios/plot', EnvioController.plot);

//Perfis
routes.get('/perfil', PerfilController.index);

//Sessoes
routes.post('/sessoes', SessaoController.create);

//Analises
routes.post('/analise', AnaliseController.create);

module.exports = routes;