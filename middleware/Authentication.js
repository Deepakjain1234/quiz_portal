let jwt = require('jsonwebtoken');
const config = require('../config/config');
const JWT_SECRET = config.authentication.secret;

const verifyToken = (req, res, next) => {
    const token = req.headers('auth-token');
    if (!token) {
        return res.status(401).json({
            status: false,
            error: "Token not provided"
        })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data;
        next();
    } catch (error) {
        return res.status(401).json({
            status: false,
            error: "Invalid token"
        });
    }
}

module.exports = verifyToken;