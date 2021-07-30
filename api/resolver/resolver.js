const { Recipe, User } = require('../model/model');
const { UserInputError, AuthenticationError } = require('apollo-server'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { APP_SECRET } = require('../utils');


const resolvers = {
  recipes: () => {
    // this was for mock data
    // return recipes
    // for finding ALL the recipes
    return Recipe.find({})
  },
  recipeByTitle: (args, args2, args3) => {
    // this is mongoose
    console.log("context", args3);
    return Recipe.findOne({title: new RegExp('^' + args.title + '$', 'gi')})
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
  signUp: async (args) => {
  // check the dupe email 
    const existingUser = await User.findOne({ email: args.email });
    
    console.log("args", args);
    console.log("ex", existingUser);
    if(existingUser){
      throw new UserInputError("User already exists");
    }
    let signup = new User( {
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      password: args.password
    })
    signup.save()

    const token = jwt.sign({ user: signup }, APP_SECRET);
    return {user: signup, token}
  },
  logIn: async (args) => {
    const user = await User.findOne({ email: args.email });
    if(!user){
      throw new AuthenticationError("Invalid crendentials - email address");
    }
    const matchPasswords = bcrypt.compareSync(args.password, user.password);
    if(!matchPasswords){
      throw new AuthenticationError("Invalid crendeitials - password")
    }
    const token = jwt.sign({ user: user }, APP_SECRET); 

    return {user, token}
  },
  validateToken: async (obj, arg, context) => {
    console.log({context, obj, arg});
    if(!context.userId){
      throw new AuthenticationError("Invalid token");
    }
    const user = await User.findOne({ _id: context.userId });
    if(!user){
      throw new AuthenticationError("Unknown user");
    }
    const token = jwt.sign({ user: user }, APP_SECRET); 

    return {user, token}
  }
}

module.exports = resolvers