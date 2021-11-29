const tipoDeficienciaCertify = require('./tipoDeficiencia');

const tipoDeficienciaValidate = async (nome) => {

    await tipoDeficienciaCertify.validate({
        nome
    });

}

module.exports = { tipoDeficienciaValidate }