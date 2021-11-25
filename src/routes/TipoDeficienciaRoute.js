const {Router} = require('express');
const routes = new Router();
const tipoDeficienciaController = require('../controller/TipoDeficienciaController');
const {authenticate} =  require('../middleware/authSession');

routes.post('/tipodeficiencia', authenticate ,tipoDeficienciaController.store);

module.exports = routes;
