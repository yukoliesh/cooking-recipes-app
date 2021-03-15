const recipes = require('../data/MockData');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');


class RecipeAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getRecipes(args) {
    return _.filter(recipes, args);
  }
  
  getRecipeByTitle(title){
    console.log("title", title);
    const recipe = _.filter(recipes, function(a){
      return a.title.toLowerCase().indexOf((title).toLowerCase()) !== -1;
    });
    console.log("recipe", recipe);
    return recipe[0];
  }
}

module.exports = RecipeAPI;