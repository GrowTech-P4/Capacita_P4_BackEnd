const Yup = require('yup');

const respostasCertify = Yup.object().shape({
    nomeUsuario: Yup.string()
        .min(3)
        .max(100)
        .required(),
    data: Yup.string()
        .required(),
    resposta: Yup.string()
        .min(3)
        .max(100)
        .required(),
});


module.exports = respostasCertify;