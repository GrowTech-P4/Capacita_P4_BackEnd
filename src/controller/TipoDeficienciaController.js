const TipoDeficiencia = require('../model/TipoDeficiencia');
const {tipoDeficienciaValidate} = require('../validations/tipoDeficiencia/tipoDeficienciaValidate');

const store = async (req, res) => {
    try{
        const { nome } = req.body;

        await tipoDeficienciaValidate(nome);

        const tipoDeficienciaResult = await TipoDeficiencia.findOne({nome});

        if(tipoDeficienciaResult){
            return res.status(400).json({message:"Disability already registered!"});
        }

        const result = await TipoDeficiencia.create({ nome });

        return res.status(200).json(result);
    }catch(err){
        return res.status(400).json(err.message);
    }
}

const index = async (_, res) => {
    try{
        const result = await TipoDeficiencia.find();

        return res.status(200).json(result);
    }catch(err){
        return res.status(400).json(err.message);
    }
}

const indexById = async (req, res) => {
    try {        
        const { _id } = req.params;

        const deficiency = await TipoDeficiencia.findById(_id);
        
        if (!deficiency) {
            return res.status(400).json({ message: "Deficiency not found!" });
        }

        return res.status(200).json(deficiency);
    } catch (err) {
        return res.status(400).json(err.message);
    } 
}


module.exports = {
    store,
    index,
    indexById
}