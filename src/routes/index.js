const { Router } = require('express');
const testController = require('../controller/index');
const routes = new Router();

routes.get('/home', testController.index);
routes.post('/test', testController.storeTest);

module.exports = routes;
