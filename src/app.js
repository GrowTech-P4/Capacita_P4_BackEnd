const express = require('express');
const routes = require('./routes/index');
const usuarioPCDRoute = require('./routes/UsuarioPCDRoute'); 
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
        this.server.use(usuarioPCDRoute);
    }
}

module.exports = new App().server;