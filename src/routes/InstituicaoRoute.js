const { Router } = require('express');
const routes = new Router();
const instituicaoController = require('../controller/InstituicaoController');


routes.get('/instituicao', instituicaoController.index);
routes.get('/instituicao/:_id', instituicaoController.indexById);
routes.post('/instituicao', instituicaoController.store);
routes.put('/instituicao/:_id', instituicaoController.update);
routes.delete('/instituicao/:_id', instituicaoController.remove);

module.exports = routes;
