const User = require('../models/User');
const Recipe = require('../models/Recipe');

module.exports = {
    Query: {
        async getRecipes(_, {email}) {
            try {
                const user = await User.findOne({ email }).populate('recipes');
                if (!user) {
                    throw new Error('User not found');
                }
                return user.recipes;
            } catch (err) {
                throw new Error(err);
            }
        }        
    },
    Mutation: {
        async addRecipe(_, { email, recipeInput }) {
            const { label, image, ingredients } = recipeInput;
            try {
                let user = await User.findOne({ email });
                if (!user) {
                    user = await User.create({ email });
                }
                const recipeExists = await Recipe.findOne({ label, _id: { $in: user.recipes } });
                if (recipeExists) {
                    throw new Error('Recipe already exists for this user!');
                }
                const newRecipe = await Recipe.create({ label, image, ingredients });
                user.recipes.push(newRecipe);
                await user.save();
                return newRecipe;
            } catch (err) {
                throw new Error(err);
            }
        },
        async deleteRecipe(_, { email, recipeId }) {
            try {
                const user = await User.findOne({ email });
                if (!user) {
                    throw new Error('User not found');
                }
                const recipeIndex = user.recipes.findIndex(recipe => String(recipe._id) === recipeId);
                if (recipeIndex === -1) {
                    throw new Error('Recipe not found for this user');
                }
                user.recipes.splice(recipeIndex, 1);
                await user.save();
                await Recipe.findByIdAndDelete(recipeId);
                return true;
            } catch (err) {
                throw new Error(err);
            }
        }
    }
}
