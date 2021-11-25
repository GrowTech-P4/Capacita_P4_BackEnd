const TipoDeficiencia = require('../model/TipoDeficiencia');

const store = async (req,res) => {
    const {nome} = req.body;
    const result  = await TipoDeficiencia.create({nome});
    return res.status(200).json(result); 
}


module.exports = {
    store
}