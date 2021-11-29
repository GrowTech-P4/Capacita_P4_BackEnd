const Yup = require('yup');

const perguntasCertify = Yup.object().shape({
    descricao: Yup.string()
        .min(3)
        .max(100)
        .required(),
    titulo: Yup.string()
        .min(3)
        .max(100)
        .required(),
    data: Yup.string()
        .required(),
    nomeUsuario: Yup.string()
        .min(3)
        .max(100)
        .required(),
});

module.exports = perguntasCertify;