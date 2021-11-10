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
    nome: String,
    descricao: String,
    cargaHoraria: String,
    tipoDeficiencia: String,
    duracao: String,
    valor: Number,
    dataConclusao: String,
    img_curso: String,
    perguntas: [{
     _id: mongoose.Types.ObjectId(),
    }],
    usuarioPcd: [{
      _id: mongoose.Types.ObjectId(),
      nome: String
    }]
  }]
});

module.exports = mongoose.model('Instituicao', Instituicao);