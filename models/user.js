const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = new mongoose.Schema({
    "name" : String,
    "email" : String,
    "password" : String,
    // "role" : {
    //     type : String,
    //     enum : ['Admin','User','Manager'],
    //     default : 'user'
    // },
    // "createdAt" : {
    //     type : Date,
    //     default : Date.now
    // },
    // "updatedAt" : {
    //     type : Date,
    //     default : Date.now
    // }
});

module.exports = mongoose.model('User',userSchema,'users');