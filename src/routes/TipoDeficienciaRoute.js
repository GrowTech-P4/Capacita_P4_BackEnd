const {Router} = require('express');
const routes = new Router();
const tipoDeficienciaController = require('../controller/TipoDeficienciaController');
const {authenticate} =  require('../middleware/authSession');

routes.post('/tipodeficiencia', tipoDeficienciaController.store);
routes.get('/tipodeficiencia',tipoDeficienciaController.index);
routes.get('/tipodeficiencia/:_id', authenticate ,tipoDeficienciaController.indexById);

module.exports = routes;
