// import express
const express = require('express');
const receipeController = require('../controllers/receipeControllers');

const receipeRouter = express.Router();

receipeRouter.get('/', receipeController.test);

module.exports = receipeRouter;

