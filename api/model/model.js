const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  id: ID,
  category: String,
  title: String,
  image: String,
  description: String,
  prepTime: Int,
  cookTime: Int,
  totalTime: Int,
  serving: String,
  effort: String,
  isFavorite: Boolean,
  url: String,
  ingredients: [Ingredient],
  steps: [Step]
})

modules.exports = new mongoose.model('Recipe', recipeSchema);