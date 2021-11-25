const {Router} = require('express');
const routes = new Router();
const sessionController = require('../controller/sessionUsuarioPCDController');


routes.post('/login',sessionController.store);


module.exports = routes;



