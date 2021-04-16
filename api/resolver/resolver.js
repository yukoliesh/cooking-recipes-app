const { Recipe, User } = require('../model/model');
const { UserInputError } = require('apollo-server'); 

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
    console.log("ing", args.ingredients);
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
  },
  signup: async (args) => {
  // check the dupe email 
    const existingUser = await User.find(u => { return u && u.email === args.email });
    console.log("ex", existingUser);
    if(existingUser.length){
      throw new UserInputError("User already exists");
    }
    let signup = new User( {
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      password: args.password
    })
    signup.save()
    return {user: signup, token: "sample token"}
  },
  login: (args) => {
    let login = new User({
      email: args.email,
      password: args.password
    })
    login.save()
    return login
  }
}

module.exports = resolvers