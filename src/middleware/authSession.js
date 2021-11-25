const jwt = require('jsonwebtoken');
const {promisify} =  require('util');

const {usuarioPCDToken} =  require('../config/authUsuario');

const authenticate = async (req,res,next)=> {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(400).json({error:"Token is not defined!"});
    }

    const [,token] = authHeader.split(" ");

    try{
        const decoded = await promisify(jwt.verify)(token,usuarioPCDToken.secret);
        req.usuarioPCD_decoded_id = decoded._id; 
        return next();
    }catch(err){
        return res.status(400).json(err);
    }   
}

module.exports = {
    authenticate
}