const express = require('express');
const authController = require('../controllers/authControllers');

const authRouter = express.Router();

//define end points
authRouter.post('/register',authController.register);
authRouter.post('/login',authController.login);
authRouter.post('/logout',authController.logout);

module.exports = authRouter;  