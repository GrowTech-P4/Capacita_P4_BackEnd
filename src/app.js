const express = require('express');
const routes = require('./routes/index');
const usuarioPCDRoute = require('./routes/UsuarioPCDRoute');
const instituicaoRoute = require('./routes/InstituicaoRoute');
require('dotenv').config();
require('../src/config/connection');

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(express.static('public'))
    }

    routes() {
        this.server.use(routes);
        this.server.use(usuarioPCDRoute);
        this.server.use(instituicaoRoute);
    }
}

module.exports = new App().server;