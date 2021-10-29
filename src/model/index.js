const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    name:String,
    birth:String
});

module.exports =  mongoose.model('Test',testSchema);
