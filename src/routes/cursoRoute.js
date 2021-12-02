const {Router} = require('express');
const routes = new Router();
const multer = require('multer');

const cursoController = require("../controller/cursoController");

const multerConfig = require('../config/multer');
const upload =  multer(multerConfig);
const {authenticate} = require('../middleware/authSession');

routes.get('/curso',cursoController.index);
routes.get('/curso/:_id',cursoController.indexById);
routes.get('/carrossel',cursoController.indexCarrossel);
routes.post('/curso/:_id',cursoController.store);
routes.put('/curso/:_id/file',upload.single('file'),cursoController.inserAndUpdateFile);
routes.put('/curso/:_id',authenticate, cursoController.inscriUser);
routes.delete('/curso/:_id',cursoController.remove);

module.exports = routes;
