const bcrypt =  require('bcryptjs');
const UsuarioPCD = require('../model/UsuarioPCD');

const store = async (req, res) => {
    const user = req.body;
    const userResult = await UsuarioPCD.findOne({email:user.email});
    if(userResult){
        return res.status(400).json({message:"E-mail already registered!"})
    }

    user.senha = await bcrypt.hash(user.senha,8);  
    const result = await UsuarioPCD.create(user);
    return res.json(result);
}

const index = async (req, res) => {
    const result = await UsuarioPCD.find();
    return res.json(result);
}

const indexById = async (req, res) => {
    const {_id} = req.params;
    const user = await UsuarioPCD.findById(_id);
    if(!user){
        return res.json({message:"User not found!"});
    }
    return res.json(user);
}

const update = async (req,res) => {
    const {_id} = req.params;
    const userExists = await UsuarioPCD.findById(_id);
    
    if(!userExists){
        return res.json({message:"User not exist!"});
    }

    await userExists.updateOne(req.body);

    return res.json({message:"Success!"});
}

const remove = async (req,res) => {
    const {_id} = req.params;
    const userExists = await UsuarioPCD.findById(_id);
    
    if(!userExists){
        return res.json({message:"User not exist!"});
    }
    await userExists.deleteOne();
    return res.json({message:"User deleted!"});
}




module.exports = {
    store,
    index,
    indexById,
    update,
    remove,
}