const mongoose = require('mongoose');

const UsuarioPCD = mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  data_nascimento: String,
  telefone: String,
  cpf: String,
  endereco: String,
  numero: Number,
  cep: Number,
  link_foto: String,
  bairro: String,
  tipoDeficiencia: [{
    nome: String
  }]
})
module.exports = mongoose.model('UsuarioPCD', UsuarioPCD);