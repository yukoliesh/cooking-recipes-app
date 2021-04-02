const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    recipes(
      id: ID
      category: String
      title: String
      image: String,
      description: String,
      prepTime: Int,
      cookTime: Int,
      totalTime: Int,
      serving: String,
      effort: String,
      isFavorite: Boolean,
      url: String
    ): [Recipe]
    recipeByTitle(title: String!): Recipe
    recipesByCategory(category: String!): [Recipe]
  }
  type Ingredient {
    name: String!
    type: String
  }
  type Step {
    step: String!
  }
  type Recipe {
    id: ID!
    category: String!
    title: String!
    image: String
    description: String
    prepTime: Int
    cookTime: Int
    totalTime: Int
    serving: String
    effort: String
    isFavorite: Boolean
    url: String
    ingredients: [Ingredient]
    steps: [Step]
  }
`;