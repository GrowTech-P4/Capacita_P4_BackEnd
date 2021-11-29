const respostasCertify = require('./respostas');

const respostasValidate = async (resposta) => {
    await respostasCertify.validate({
        nomeUsuario: resposta.nomeUsuario,
        data: resposta.data,
        resposta: resposta.resposta
    })
}

module.exports = { respostasValidate }