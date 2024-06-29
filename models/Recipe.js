const { model, Schema } = require("mongoose")

const recipeSchema = new Schema({
    label: { type: String, require: true },
    image: String,
    ingredients: [Object],
});

module.exports = model('Recipe', recipeSchema)
