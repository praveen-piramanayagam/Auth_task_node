const recipe = require('../models/recipe');

const recipeController = {
    getAllRecipes: async (request, response) => {
        try {
            const recipes = await recipe.find();
            response.status(200).json(recipes);
        } catch (error) {
            response.status(500).json({ message: "error" });
            console.log(error);
        }
    },

    getRecipesByID: async (request, response) => {
        try {
            // get the id from request parameters
            const { id } = request.params;

            // get the document for the matching id
            const recipes = await recipe.findById(id);

            if (!recipes) {
                response.status(400).json({ message: "Recipe not found!!" });
            }
            response.status(200).json(recipes);
        } catch (error) {
            response.status(500).json({ message: "error" });
            console.log(error);
        }
    },

    createRecipes: async (request, response) => {
        try {
            console.log(request.body);

            const { name, category, prep_time, instructions } = request.body;

            const newRecipe = new recipe({
                name,
                category,
                prep_time,
                instructions
            });
  
            const savedRecipe = await newRecipe.save();
            response.status(201).json(savedRecipe);

        } catch (error) {
            console.error('Error saving recipe:', error);
            response.status(500).json({ message: 'Error saving recipe', error: error.message });
        }
    },

    updateRecipes: async (request, response) => {
        try {
            // get the id from request parameters
            const { id } = request.params;

            //extract the recipe details from request body
            const { name } = request.body;

            //find the document by matching id
            const recipes = await recipe.findById(id);

            //replace name by updated name
            recipes.name = name;

            await recipes.save();

            response.status(200).json({ message: "Updated successfully" });

        } catch (error) {
            response.status(500).json({ message: "error" });
            console.log(error);
        }
    },

    deleteRecipes: async (request, response) => {
        try {
            // get the id from request parameters
            const { id } = request.params;

            //find document by matching id and delete it
            const recipes = await recipe.findByIdAndDelete(id);
            if (!recipes) {
                response.status(404).json({ message: "Recipe not found" });
            }
            response.status(200).json({ message: "Deleted successfully" });
        } catch (error) {
            response.status(500).json({ message: "error" });
            console.log(error);
        }
    }
};

module.exports = recipeController;
