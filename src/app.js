const express = require('express');
const routes = require('./routes/index');
const usuarioPCDRoute = require('./routes/UsuarioPCDRoute');
const instituicaoRoute = require('./routes/InstituicaoRoute');  
const tipoDeficienciaRoute = require('./routes/TipoDeficienciaRoute');
const cursoRoute = require('./routes/cursoRoute');
const sessionUsuarioRoute = require('./routes/sessionUsuario');
require('dotenv').config();
require('../src/config/connection');

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
        this.server.use(express.static('public'))
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
        this.server.use(sessionUsuarioRoute);
        this.server.use(usuarioPCDRoute);
        this.server.use(instituicaoRoute);
        this.server.use(cursoRoute);
        this.server.use(tipoDeficienciaRoute);
    }
}

module.exports = new App().server;