const Yup = require('yup');

const sessionCertify = Yup.object().shape({

    email: Yup.string()
        .email()
        .required(),
    senha: Yup.string()
        .min(6)
        .required()

});

module.exports = sessionCertify;