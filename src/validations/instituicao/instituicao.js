const Yup = require('yup');

const instituicaoCertify = Yup.object().shape({
    nome: Yup.string()
        .min(3)
        .max(100)
        .required(),
    email: Yup.string()
        .email()
        .required(),
    senha: Yup.string()
        .min(6)
        .max(100)
        .required(),
    telefone: Yup.string()
        .min(3)
        .max(13)
        .required(),
    cnpj: Yup.string()
        .length(11)
        .matches(/^[0-9]+$/)
        .required(),
    endereco: Yup.string()
        .min(3)
        .max(100)
        .required(),
    numero: Yup.number()
        .integer()
        .required(),
    bairro: Yup.string()
        .min(3)
        .max(100)
        .required(),
    cep: Yup.number()
        .integer()
        .required(),
});


module.exports = instituicaoCertify;