const { ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
require("dotenv").config();

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Connection Successful");
        return server.listen({port: process.env.PORT})
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    })
    