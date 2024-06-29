const { model, Schema } = require("mongoose")

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
});

module.exports = model('User', userSchema)