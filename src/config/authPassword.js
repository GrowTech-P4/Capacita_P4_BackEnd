const bcrypt = require('bcryptjs');

const checkoutPassword = (passwordReceived,password) => {
    return bcrypt.compare(passwordReceived,password);
}

module.exports = {
    checkoutPassword
}