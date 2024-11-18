// import express
const express = require('express');
const recipeController = require('../controllers/recipeControllers');

const recipeRouter = express.Router();

recipeRouter.get('/', recipeController.getAllRecipes);
recipeRouter.get('/:id', recipeController.getRecipesByID);
recipeRouter.post('/', recipeController.createRecipes);
recipeRouter.put('/:id', recipeController.updateRecipes);
recipeRouter.delete('/:id', recipeController.deleteRecipes);


module.exports = recipeRouter;

