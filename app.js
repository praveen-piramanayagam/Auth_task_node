// import express
const express = require('express');
const receipeRouter = require('./routes/receipeRoutes');

// create an express app
const app = express();

// define the root route
app.use('/', receipeRouter);


// export the app
module.exports = app;