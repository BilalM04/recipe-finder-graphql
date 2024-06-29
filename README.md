# GraphQL Server with MongoDB

This is a simple GraphQL server that uses MongoDB for data storage. The server is built with Apollo Server and the database is connected using Mongoose.

## Features

- Fetch recipes for a user
- Add a new recipe for a user
- Delete a recipe for a user

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/BilalM04/recipe-finder-graphql.git
   ```
2. Install the dependencies:
   ```bash
   cd recipe-finder-graphql
   npm install
   ```
4. Create a .env file in the root directory of the project, and add your MongoDB connection string and the port number:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=your_desired_port_number
   ```
6. Run the server:
   ```
   npm start
   ```

## Usage
You can perform the following operations:

- `getRecipes(email: String)`: Fetches the recipes for the user with the specified email.
- `addRecipe(email: String!, recipeInput: RecipeInput!)`: Adds a new recipe for the user with the specified email.
- `deleteRecipe(email: String!, recipeId: ID!)`: Deletes the recipe with the specified ID for the user with the specified email.
