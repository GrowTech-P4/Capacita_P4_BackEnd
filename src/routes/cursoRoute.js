const {Router} = require('express');
const routes = new Router();
const cursoController = require("../controller/cursoController");

routes.get('/curso',cursoController.index);
routes.get('/curso/:_id',cursoController.indexById);
routes.get('/carrossel',cursoController.indexCarrossel);
routes.post('/curso',cursoController.store);

module.exports = routes;
