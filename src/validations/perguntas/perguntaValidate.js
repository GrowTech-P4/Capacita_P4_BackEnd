const perguntasCertify = require('./pergunta');

const perguntasValidate = async (perguntas) => {
    perguntasCertify.validate({
        descricao: perguntas.descricao,
        titulo: perguntas.titulo,
        data: perguntas.data,
        nomeUsuario: perguntas.nomeUsuario
    })
}

module.exports = { perguntasValidate }