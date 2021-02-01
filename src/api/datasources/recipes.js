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

  getRecipeById(id){
    const recipe = _.filter(recipes, { id: parseInt(id) });
    return recipe[0];
  }
}

module.exports = RecipeAPI;