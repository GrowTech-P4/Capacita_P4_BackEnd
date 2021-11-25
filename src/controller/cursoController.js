const Curso = require('../model/curso');

const store = async (req,res) => {
    const result = await Curso.create(req.body);
    return res.status(200).json(result);
}

const index = async (req,res) =>{
    const result = await Curso.find();
    return res.status(200).json(result);
}

const indexCarrossel = async (req,res) =>{
    try{
        const result = await Curso.find();    
        const carrossel = result.slice(result.length - 10, result.length);
        return res.status(200).json(carrossel);
    }catch (err){
        return res.status(400).json(err.message);
    }
}

const indexById =  async (req,res) => {
    const {_id} = req.params;
    const cursoResult = await Curso.findById(_id);
    if(!cursoResult){
        return res.status(400).json({message:"Curso not found!"});
    }
    return res.status(200).json(cursoResult);
}

module.exports = {
    store,
    index,
    indexById,
    indexCarrossel
}