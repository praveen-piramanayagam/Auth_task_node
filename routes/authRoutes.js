const express = require('express');
const authController = require('../controllers/authControllers');
const auth = require('../utils/auth');

const authRouter = express.Router();

//define end points
authRouter.post('/register',authController.register);
authRouter.post('/login',authController.login);
authRouter.post('/logout',authController.logout);

//protected endpoints
authRouter.get('/me',auth.isAuthenticated, authController.me);

module.exports = authRouter;  