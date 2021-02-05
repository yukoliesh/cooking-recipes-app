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

// const { ApolloServer, gql } = require('apollo-server');
// // The GraphQL schema
// const typeDefs = gql`
//   type Query {
//     "A simple type for getting started!"
//     hello: String
//   }
// `;
// // A map of functions which return data for the schema.
// const resolvers = {
//   Query: {
//     hello: () => 'world',
//   },
// };
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   playground: true
// });
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });
