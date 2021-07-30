// This will store all the queries with the actual queries which are going to make to the graphQL server
const { buildSchema } = require('graphql');

const recipeSchema = buildSchema(`
  type Query {
    recipes: [Recipe]
    recipeByTitle(title: String!): Recipe
    recipesByCategory(category: String!): [Recipe]
  }

  input IngredientInput{
    name: String,
    type: String
  }
  input StepInput{
    step: String
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
      ingredients: [IngredientInput]
      steps: [StepInput]
      ): Recipe
    signUp(email: String!, password: String!, firstName: String!, lastName: String!): AuthPayload
    logIn(email: String!, password: String!): AuthPayload
    validateToken(x: String): AuthPayload
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

  type AuthPayload {
    token: String
    user: User
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    role: String
  }
`)

module.exports = recipeSchema