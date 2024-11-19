// import express
const express = require('express');
const recipeRouter = require('./routes/recipeRoutes');
const authRouter = require('./routes/authRoutes');

// create an express app
const app = express();

//add middleware to parse data\
app.use(express.json());

// define the root route
app.use('/api/v1/recipes', recipeRouter);
app.use('/api/v1/auth', authRouter);

// export the app
module.exports = app;