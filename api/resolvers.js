module.exports = {
  Query: {
    recipes: (parent, args, { dataSources }, info) => {
      return dataSources.recipeAPI.getRecipes(args);
    },
    recipeByTitle: (parent, { title }, { dataSources }, info) => {
      return dataSources.recipeAPI.getRecipeByTitle(title);
    },
  },
}