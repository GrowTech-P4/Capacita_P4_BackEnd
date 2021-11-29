const mongoose = require('mongoose');

const TipoDeficiencia = mongoose.Schema({
  nome: String
})

module.exports = mongoose.model('TipoDeficiencia', TipoDeficiencia);
