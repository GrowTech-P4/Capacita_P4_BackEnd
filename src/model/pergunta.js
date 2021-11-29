const mongoose = require('mongoose');

const Pergunta = mongoose.Schema({
  descricao: String,
  titulo: String,
  data: String,
  nomeUsuario: String,
  respostas: [{
    nomeUsuario: String,
    data: String,
    resposta: String,
  }]
});

module.exports = mongoose.model('Pergunta', Pergunta);
