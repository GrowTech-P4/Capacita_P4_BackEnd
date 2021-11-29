const Yup = require('yup');

const cursoCertify = Yup.object().shape({
    nome: Yup.string()
        .min(3)
        .max(100)
        .required(),
    descricao: Yup.string()
        .required(),
    cargaHoraria: Yup.string()
        .required(),
    tipoDeficiencia: Yup.string()
        .required(),
    duracao: Yup.string()
        .required(),
    valor: Yup.string()
        .required(),
    dataConclusao: Yup.string()
        .required(),
});

module.exports = cursoCertify;