const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
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
    } },
    {
        versionKey: false // Disable the __v field
    });
//(modalname,schemaname,collectionname)
module.exports = mongoose.model('Recipe',recipeSchema,'Recipes');