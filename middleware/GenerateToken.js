const jwt = require('jsonwebtoken');
const config = require('../config/config');
const JWT_SECRET = config.authentication.secret;

module.exports = createToken = (user) => {
    const data = {
        data: user,
        exp: Math.floor(Date.now()) + (60 * 60 * 24 * 30),
    }
    const token = jwt.sign(data, JWT_SECRET, { expiresIn: '30d' });
    return token;
}