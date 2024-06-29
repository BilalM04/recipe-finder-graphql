const { gql } = require ('apollo-server');

module.exports = gql`
type Ingredient {
    text: String
    quantity: Float
    measure: String
    food: String
    weight: Float
    foodCategory: String
    foodId: String
    image: String
}

input IngredientInput {
    text: String
    quantity: Float
    measure: String
    food: String
    weight: Float
    foodCategory: String
    foodId: String
    image: String
}

type Recipe {
    label: String
    image: String
    ingredients: [Ingredient]
}

input RecipeInput {
    label: String
    image: String
    ingredients: [IngredientInput]
}

type User {
    email: String
    recipes: [Recipe]
}

type Query {
    getRecipes(email: String): [Recipe]
}

type Mutation {
    addRecipe(email: String!, recipeInput: RecipeInput!): Recipe!
    deleteRecipe(email: String!, recipeId: ID!): Boolean!
}
`
