
const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    console.log('requesttt:::',req.headers)
    console.log('response:::',res.headers)
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    console.log('tokennn:::::::::', token)
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Token missing' });
    }

    jwt.verify(token, 'secret_key', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized - Invalid token' });
        }
        console.log('decoded', decoded)
        req.user = decoded;
        next();
    });
};

const authorizeUser = (roles) => {
    return (req, res, next) => {
        console.log('role:::::', roles)
        if (!roles.includes('admin')) {
            return res.status(403).json({ message: 'Forbidden - Insufficient permissions' });
        }
        next();
    };
};

module.exports = {
    authenticateUser,
    authorizeUser
};
