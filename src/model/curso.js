const mongoose = require('mongoose');

const Curso = mongoose.Schema({
  nome: String,
  descricao: String,
  cargaHoraria: String,
  tipoDeficiencia: String,
  duracao: String,
  valor: Number,
  dataConclusao: String,
  img_curso: String,
  perguntas: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Pergunta'
  }],
  usuarioPCD: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'UsuarioPCD'
  }]
});

module.exports = mongoose.model('Curso', Curso);
