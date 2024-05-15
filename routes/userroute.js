const express = require('express');
const userRouter = express.Router();
const { signUp } = require('../service/userservice');
const { signIn } = require('../service/userservice');

userRouter.use(express.json());

userRouter.post('/signUp', signUp);

userRouter.post('/signIn', signIn)

module.exports = userRouter;
