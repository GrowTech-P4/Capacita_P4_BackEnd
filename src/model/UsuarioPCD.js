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
  tipoDeficiencia_ID: [{
      type: mongoose.Schema.Types.ObjectId,
      ref:'TipoDeficiencia'
  }]
})
module.exports = mongoose.model('UsuarioPCD', UsuarioPCD);