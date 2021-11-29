const Yup = require('yup');

const tipoDeficienciaCertify = Yup.object().shape({
    nome: Yup.string().
    min(3).
    required()
});

module.exports = tipoDeficienciaCertify;
