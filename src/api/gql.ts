import { gql } from "@apollo/client";

export const RECIPES = gql`
  query recipes{
    recipes{
      _id
      title
      description
      category
      image
      prepTime
      cookTime
      totalTime
      serving
      effort
      isFavorite
      url
      ingredients{
        name
        type
      }
      steps{
        step
      }
    }
  }
`;


export const RECIPE_BY_TITLE = gql`
  query recipeByTitle($title: String!){
    recipeByTitle(title: $title){
      _id
      title
      description
      category
      image
      prepTime
      cookTime
      totalTime
      serving
      effort
      isFavorite
      url
      ingredients{
        name
        type
      }
      steps{
        step
      }
    }
  }
`;

export const RECIPES_BY_CATEGORY = gql`
  query recipeByTitle($category: String!){
    recipesByCategory(category: $category){
      _id
      title
      description
      category
      image
      prepTime
      cookTime
      totalTime
      serving
      effort
      isFavorite
      url
      ingredients{
        name
        type
      }
      steps{
        step
      }
    }
  }
`;
