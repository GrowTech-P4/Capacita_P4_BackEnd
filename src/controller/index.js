const Test = require('../model/index');

const index = async (req, res) => {
    const result = await Test.find();
    return res.send(result);
}

const storeTest = async (req, res) => {
    try {
        const { name, birth } = req.body;
        const body = await Test.create({ name, birth });
        console.log(req)
        return res.json(body);
    } catch (err) {
        return res.json(err.Message);
    }
}




module.exports = {
    index,
    storeTest
}