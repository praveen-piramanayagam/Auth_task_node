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
    } }
);
//(modalname,schema_name,collectionname)
module.exports = mongoose.model('Recipe',recipeSchema,'Recipes');