const express = require('express');
const routes = require('./routes/index');
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
    }

    routes() {
        this.server.use(routes);
    }
}

module.exports = new App().server;