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
    const recipe = _.filter(recipes, function(a){
      return a.title.toLowerCase().indexOf((title).toLowerCase()) !== -1;
    });
    return recipe[0];
  }
  getRecipesByCategory(category){
    console.log("c", category);
    const recipesCategory = _.filter(recipes, function(c){
      return category === c.category ;
    });
    console.log("recipe", recipesCategory);
    return recipesCategory;
  }
}

module.exports = RecipeAPI;