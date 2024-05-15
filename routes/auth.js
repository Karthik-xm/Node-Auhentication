const express = require('express');
const authrouter = express.Router();
const { authorizeUser } = require('../service/authservice');
const { authenticateUser } = require('../service/authservice');

authrouter.get('/home',  authenticateUser, authorizeUser(['admin']), (req, res) => {
    res.status(200).json({ message: 'Access granted to Home page' });
});


module.exports = authrouter;
