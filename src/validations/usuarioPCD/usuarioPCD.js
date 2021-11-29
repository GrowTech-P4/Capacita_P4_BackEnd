const Yup = require('yup');

const usuarioPCDCertify = Yup.object().shape({
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
    data_nascimento: Yup.string()
        .min(3)
        .max(20)
        .required(),
    telefone: Yup.string()
        .min(3)
        .max(13)
        .required(),
    cpf: Yup.string()
        .length(11)
        .matches(/^[0-9]+$/)
        .required(),
    endereco: Yup.string()
        .mix(3)
        .max(100)
        .required(),
    numero: Yup.number()
        .integer()
        .required(),
    cep: Yup.number()
        .integer()
        .required(),
    bairro: Yup.string()
        .min(3)
        .max(100)
        .required(),
    tipoDeficiencia_ID: Yup.string()
        .required()
});


module.exports = usuarioPCDCertify;