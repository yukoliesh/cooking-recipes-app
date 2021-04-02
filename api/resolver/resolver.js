const Recipe = require('../model/model');
const recipes = require('../data/MockData');

const resolvers = {
  recipes: () => {
    // this was for mock data
    // return recipes
    // for finding ALL the recipes
    return Recipe.find({})
  },
  recipeByTitle: (args) => {
    return Recipe.findOne({title: args.title})
  },
  recipesByCategory: (parent, { category }, { dataSources }, info) => {
    return Recipe.recipeAPI.getRecipesByCategory(category);
  },
  addRecipe: (args) => {
    // Recipe is coming from the model
    let recipe = new Recipe({
      title: args.title,
      description: args.description,
      category: args.category,
      image: args.image,
      prepTime: args.prepTime,
      cookTime: args.cookTime,
      totalTime: args.totalTime,
      serving: args.serving,
      effort: args.effort,
      isFavorite: args.isFavorite,
      url: args.url,
      ingredients: args.ingredients,
      steps: args.steps
    })
    // This save function will save the object in MongoDB
    recipe.save()
    return recipe
      // args is coming from schema.js in the Mutation
      // title: args.title
    
  }
}

module.exports = resolvers