// import express
const express = require('express');
const receipeController = require('../controllers/receipeControllers');

const receipeRouter = express.Router();

receipeRouter.get('/', receipeController.getAllReceipes);
receipeRouter.get('/:id', receipeController.getReceipesByID);
receipeRouter.post('/', receipeController.createReceipes);
receipeRouter.put('/:id', receipeController.updateReceipes);
receipeRouter.delete('/:id', receipeController.deleteReceipes);


module.exports = receipeRouter;

