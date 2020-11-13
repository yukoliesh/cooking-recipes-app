// import { gql } from '@apollo/client';

// graphql 

const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type MainRecipe {
    id: ID!;
    category: String!;
    title: String!;
    image: String!;
    description: String!
    totalTime: Int!
    serving: String!
    effort: String!
    isFavorite: Boolean
    url: String!
  }
  type Query {
    allRecipes: [MainRecipe!]!
  }
`;

const mocks = {
  ID: () => "1",
  Int: () => 15,
  String: () => "Japanese Curry",
  Boolean: () => false
}

const server = new ApolloServer({
  typeDefs,
  mocks
});

server.listen().then(({ url }) =>  {
  console.log(`🚀  Server ready at ${url}`);
});

export const RECIPE_QUERY = gql`
  {
    mainRecipe(id: "1") {
      id
      name
      description
      totalTime
      category
    }
  }
`;