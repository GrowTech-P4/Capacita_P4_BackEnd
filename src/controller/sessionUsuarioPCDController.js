const jwt = require('jsonwebtoken');
const {sessionValidate} = require('../validations/session/sessionValidate');
const UsuarioPCD = require('../model/UsuarioPCD');
const { checkoutPassword } = require('../utils/authPassword');

const { usuarioPCDToken } = require('../config/authUsuario');

const store = async (req, res) => {
    try {
        const login = req.body;

        await sessionValidate(login);

        const userResult = await UsuarioPCD.findOne({email:login.email});

        if (!userResult) {
            return res.status(400).json({ message: "E-mail not found!" });
        }

        if (!(await checkoutPassword(login.senha, userResult.senha))) {
            return res.status(400).json({ message: "Password does not match!" });
        }

        const { _id, nome } = userResult;

        return res.json({
            usuarioPCD: {
                _id,
                email:login.email,
                nome
            },
            token: jwt.sign({ _id }, usuarioPCDToken.secret, {
                expiresIn: usuarioPCDToken.expiresIn
            })
        });
    } catch (err) {
        return res.status(400).json(err.message);
    }
}

module.exports = { store };
