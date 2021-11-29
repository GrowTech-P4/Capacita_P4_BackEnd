const sessionCertify = require('./session');

const sessionValidate = async (login) => {

    await sessionCertify.validate({
        email: login.email,
        senha: login.senha
    });

}

module.exports = { sessionValidate }
