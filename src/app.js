const express = require('express');
const path = require('path');
const fs = require('fs');

const { cursoRoutes, instituicaoRoutes, sessionUsuarioPCDRoutes, tipoDeficienciaRoutes, usuarioPCDRoutes } = require('./routes/index');

require('dotenv').config();
require('../src/config/connection');

class App {
    constructor() {
        this.server = express();
        this.storePath();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
        );
    }

    routes() {
        this.server.use(sessionUsuarioPCDRoutes);
        this.server.use(usuarioPCDRoutes);
        this.server.use(instituicaoRoutes);
        this.server.use(cursoRoutes);
        this.server.use(tipoDeficienciaRoutes);
    }

    storePath() {
        const tmp = path.resolve(__dirname, '..', 'tmp', 'uploads');
        if (!fs.existsSync(tmp)) {
            fs.mkdirSync(tmp, { recursive: true });
        }
    }
}

module.exports = new App().server;