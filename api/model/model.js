const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  category: String,
  title: String,
  image: String,
  description: String,
  prepTime: Number,
  cookTime: Number,
  totalTime: Number,
  serving: String,
  effort: String,
  isFavorite: Boolean,
  url: String,
  ingredients: [{
    name: String,
    type: String
  }],
  steps: [{
    step: String
  }]
})

module.exports = new mongoose.model('Recipe', recipeSchema);