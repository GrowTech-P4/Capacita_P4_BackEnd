const mongoose = require('mongoose');

const Instituicao = mongoose.Schema({
  _id: String,
  nome: String,
  email: String,
  senha: String,
  telefone: String,
  cnpj: String,
  endereco: String,
  numero: Number,
  bairro: String,
  cep: Number,
  curso: {
    nome: String,
    descricao: String,
    cargaHoraria: String,
    tipoDeficiencia: String,
    duracao: String,
    valor: Number,
    dataConclusao: String,
    img_curso: String,
    perguntas: {
      descricao: String,
      titulo: String,
      data: String,
      nomeUsuario: String,
      respostas: {
        nomeUsuario: String,
        data: String,
        resposta: String
      }
    },
    usuarioPcd: {
      _id: String,
      nome: String
    }
  }


})

module.exports = mongoose.model('Test', Instituicao);