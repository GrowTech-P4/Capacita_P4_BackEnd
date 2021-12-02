const Curso = require('../model/curso');
const Instituicao = require('../model/Instituicao');
const fs = require('fs');
const { resizeImg } = require('../utils/resizeimg');

const store = async (req, res) => {
    const { _id } = req.params;
    const instExist = await Instituicao.findById(_id);

    if (!instExist) {
        return res.status(400).json({ message: "Instituiton not found!" });
    }

    const result = await Curso.create(req.body);
    return res.status(200).json({
        nome: result.nome,
        descricao: result.descricao
    });
}

const index = async (_, res) => {
    try {
        const result = await Curso.find();
        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
}

const indexCarrossel = async (_, res) => {
    try {
        const result = await Curso.find();
        const carrossel = result.slice(result.length - 10, result.length);
        return res.status(200).json(carrossel);
    } catch (err) {
        return res.status(400).json(err.message);
    }
}

const indexById = async (req, res) => {
    const { _id } = req.params;
    const cursoResult = await Curso.findById(_id);
    if (!cursoResult) {
        return res.status(400).json({ message: "Curso not found!" });
    }
    return res.status(200).json(cursoResult);
}

const inserAndUpdateFile = async (req, res) => {
    try {
        const { _id } = req.params;
        const cursoResult = await Curso.findById(_id);

        if (!cursoResult) {
            fs.unlinkSync(req.file.path);
            return res.status(400).json({ message: "Course not found!" });
        }

        const { filename: image } = req.file;
        const [name] = image.split('.');
        const foto = `${name}.jpg`

        resizeImg(req.file.path, req.file.destination, foto);

        await cursoResult.updateOne({ img_curso: foto });

        return res.status(200).json({ message: "successfully inserted or altered image!" });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

const inscriUser = async (req, res) => {
    try {
        const { _id } = req.params;
        const { usuarioPCD } = req.body;
        const cursoResult = await Curso.findById(_id);

        if (!cursoResult) {
            return res.status(400).json({ message: "Curso not found!" });
        }

        if (cursoResult.usuarioPCD.includes(usuarioPCD._id)) {
            return res.status(400).json({ message: "User already entered!" });
        }

        cursoResult.usuarioPCD.push(usuarioPCD);
        cursoResult.save();

        return res.status(200).json("successfully inserted user!");
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

const remove = async (req, res) => {
    const { _id } = req.params;
    const resultCurso = await Curso.findOne({ nome: _id });
    if (!resultCurso) {
        return res.status(400).json({ message: "Curso not found!" });
    }
    await resultCurso.deleteOne();
    return res.status(200).json({ message: "Curso deletado com sucesso!" });

}
module.exports = {
    store,
    index,
    indexById,
    indexCarrossel,
    inserAndUpdateFile,
    inscriUser,
    remove
}