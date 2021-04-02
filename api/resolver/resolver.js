const Recipe = require('../model/model');

const resolvers = {
  recipes: () => {
    // this was for mock data
    // return recipes
    // for finding ALL the recipes
    return Recipe.find({})
  },
  recipeByTitle: (args) => {
    // this is mongoose
    return Recipe.findOne({title: args.title})
  },
  recipesByCategory: (args) => {
    return Recipe.find({category: args.category})
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