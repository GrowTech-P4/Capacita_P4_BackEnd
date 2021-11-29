const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.LOGIN_BANCO}:${process.env.PASSWORD_BANCO}@cluster0.h3yc2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;