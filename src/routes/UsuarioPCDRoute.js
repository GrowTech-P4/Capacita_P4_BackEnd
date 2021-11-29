const { Router } = require('express');
const routes = new Router();
const usuarioPCDController = require('../controller/UsuarioPCDController');


routes.get('/usuariopcd', usuarioPCDController.index);
//JWT ENTRA AQUI.
routes.get('/usuariopcd/:_id', usuarioPCDController.indexById);
routes.post('/usuariopcd', usuarioPCDController.store);
routes.put('/usuariopcd/:_id', usuarioPCDController.update);
routes.delete('/usuariopcd/:_id', usuarioPCDController.remove);

module.exports = routes;
