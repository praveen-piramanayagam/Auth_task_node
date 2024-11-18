const mongoose = require('mongoose');

const receipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum:['South-indian','North-indian','Chinese','Italian'],
        required: true,
    },
    prep_time: {
        type: Number,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('Receipe',receipeSchema,'Receipes');