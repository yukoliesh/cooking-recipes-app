module.exports = {
  Query: {
    recipes: (parent, args, { dataSources }, info) => {
      return dataSources.recipeAPI.getRecipes(args);
    },
    recipeById: (parent, { id }, { dataSources }, info) => {
      return dataSources.recipeAPI.getRecipeById(id);
    },
  },
}