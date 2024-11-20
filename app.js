// import express
const express = require('express');
const recipeRouter = require('./routes/recipeRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

// create an express app
const app = express();

//add middleware to parse data
app.use(express.json());

//add middleware to parse cookies
app.use(cookieParser());

// define the root route
app.use('/api/v1/recipes', recipeRouter);
app.use('/api/v1/auth', authRouter);  

// export the app
module.exports = app;