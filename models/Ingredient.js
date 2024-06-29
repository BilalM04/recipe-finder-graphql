const { model, Schema } = require("mongoose")

const ingredientSchema = new Schema({
    text: String,
    quantity: Number,
    measure: String,
    food: String,
    weight: Number,
    foodCategory: String,
    foodId: String,
    image: String
});

module.exports = model('Ingredient', ingredientSchema)
