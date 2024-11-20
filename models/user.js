const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = new mongoose.Schema({
    "name" : String,
    "email" : String,
    "password" : String,
    "role": { 
        type: String, 
        enum: ['admin', 'moderator', 'user'], // Add 'user' here
        default: 'user' // Set default if applicable
    },    
    "createdAt" : {
        type : Date,
        default : Date.now
    },
    "updatedAt" : {
        type : Date,
        default : Date.now
    }  
});
const User = mongoose.model('User',userSchema,'users');
module.exports = User;