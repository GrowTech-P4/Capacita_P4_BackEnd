const instituicaoCertify = require('./instituicao');

const instituicaoValidate = async (instituicao) => {
    await instituicaoCertify.validate({
        nome: instituicao.nome,
        email: instituicao.email,
        senha: instituicao.senha,
        telefone: instituicao.telefone,
        cnpj: instituicao.cnpj,
        endereco: instituicao.endereco,
        numero: instituicao.numero,
        bairro: instituicao.bairro,
        cep: instituicao.cep
    });
}

module.exports = { instituicaoValidate }