const mongoose = require('mongoose');

const TipoDeficiencia = mongoose.Schema({
  _id: String,
  nome: String
})

module.exports = mongoose.model('Test', TipoDeficiencia);