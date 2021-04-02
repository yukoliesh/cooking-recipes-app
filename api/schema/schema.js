// This will store all the queries with the actual queries which are going to make to the graphQL server
const { buildSchema } = require('graphql');

const recipeSchema = buildSchema(`
  type Query {
    recipes: [Recipe]
    recipeByTitle(title: String!): Recipe
    recipesByCategory(category: String!): [Recipe]
  }

  type Mutation {
    addRecipe( 
      title: String!, 
      description: String!, 
      category: String!
      image: String
      prepTime: Int
      cookTime: Int
      totalTime: Int
      serving: String
      effort: String
      isFavorite: Boolean
      url: String
      ingredients: [Ingredient]
      steps: [Step]
      ): Recipe
  }

  type Ingredient {
    name: String!
    type: String
  }
  type Step {
    step: String!
  }

  type Recipe {
    _id: ID
    category: String
    title: String
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
`)

module.exports = recipeSchema