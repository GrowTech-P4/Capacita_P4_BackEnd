require('dotenv').config();

const usuarioPCDToken = {
    secret:process.env.USUARIO_PCD_SECRET,
    expiresIn:process.env.EXPIRES_IN
}

module.exports = {
    usuarioPCDToken
}