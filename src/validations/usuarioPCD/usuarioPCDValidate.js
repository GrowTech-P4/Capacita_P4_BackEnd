const usuarioPCDCertify = require('./usuarioPCD');

const usuarioPCDValidate = async (user) => {
    await usuarioPCDCertify.validate({
        nome: user.nome,
        email: user.email,
        senha: user.senha,
        data_nascimento: user.data_nascimento,
        telefone: user.telefone,
        cpf: user.cpf,
        endereco: user.endereco,
        numero: user.numero,
        cep: user.cep,
        bairro: user.bairro,
        tipoDeficiencia_ID: user.tipoDeficiencia_ID,
    });
}

module.exports = { usuarioPCDValidate }
