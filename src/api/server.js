const { ApolloServer } = require('apollo-server');

const RecipeAPI = require('./datasources/recipes');
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');

const dataSources = () => ({
  recipeAPI: new RecipeAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server
  .listen({ port: process.env.PORT || 4000})
  .then(({ url }) => {
    console.log(`graphQL running at ${url}`);
  })


