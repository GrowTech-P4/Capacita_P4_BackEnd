const Instituicao = require('../model/Instituicao');

const store = async (req, res) => {
    const result = await Instituicao.create(req.body);
    return res.json(result);
}

const index = async (_, res) => {
    const result = await Instituicao.find();
    return res.json(result);
}

const indexById = async (req, res) => {
    const { _id } = req.params;
    const instituicao = await Instituicao.findById(_id);
    if (!instituicao) {
        return res.json({ message: "Instituicao not found!" });
    }
    return res.json(instituicao);
}

const update = async (req, res) => {
    const { _id } = req.params;
    const instituicaoExists = await Instituicao.findById(_id);

    if (!instituicaoExists) {
        return res.json({ message: "instituicao not exist!" });
    }

    await instituicaoExists.updateOne(req.body);

    return res.json({ message: "Success!" });
}

const remove = async (req, res) => {
    const { _id } = req.params;
    const instituicaoExists = await Instituicao.findById(_id);

    if (!instituicaoExists) {
        return res.json({ message: "instituicao not exist!" });
    }
    await instituicaoExists.deleteOne();
    return res.json({ message: "instituicao deleted!" });
}




module.exports = {
    store,
    index,
    indexById,
    update,
    remove,
}