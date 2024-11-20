const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = new mongoose.Schema({
    "name" : String,
    "email" : String,
    "password" : String, 
});
const User = mongoose.model('User',userSchema);
module.exports = User;