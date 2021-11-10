const UsuarioPCD = require('../model/UsuarioPCD');

const store = async (req, res) => {
    const { nome, email, senha, data_nascimento, telefone, cpf,
        endereco, numero, cep, link_foto, bairro, tipoDeficiencia } = req.body;
    const result = await UsuarioPCD.create(req.body);
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

    const { nome, email, senha, data_nascimento, telefone, cpf,
        endereco, numero, cep, link_foto, bairro, tipoDeficiencia } = req.body;

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