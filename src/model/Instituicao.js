const mongoose = require('mongoose');

const Instituicao = mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  telefone: String,
  cnpj: String,
  endereco: String,
  numero: Number,
  bairro: String,
  cep: Number,
  curso: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Curso'
  }]
});

module.exports = mongoose.model('Instituicao', Instituicao);