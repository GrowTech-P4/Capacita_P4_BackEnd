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
    tipoDeficiencia: {
      type: mongoose.Schema.Types.ObjectId, ref: 'TipoDeficiencia'
    },
    duracao: String,
    valor: Number,
    dataConclusao: String,
    img_curso: String,
    perguntas: [{
      type: mongoose.Schema.Types.ObjectId, ref: 'Pergunta'
    }],
    usuarioPcd: [{
      type: mongoose.Schema.Types.ObjectId, ref: 'UsuarioPCD'
    }]
  }]
});

module.exports = mongoose.model('Instituicao', Instituicao);