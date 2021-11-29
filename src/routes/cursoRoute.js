const {Router} = require('express');
const routes = new Router();
const multer = require('multer');

const cursoController = require("../controller/cursoController");

const multerConfig = require('../config/multer');
const upload =  multer(multerConfig);

routes.get('/curso',cursoController.index);
routes.get('/curso/:_id',cursoController.indexById);
routes.get('/carrossel',cursoController.indexCarrossel);
routes.post('/curso',cursoController.store);
routes.put('/curso/:_id/file',upload.single('file'),cursoController.inserAndUpdateFile);

module.exports = routes;
