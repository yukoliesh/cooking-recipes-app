import { gql } from "@apollo/client";

export const RECIPES = gql`
  query recipes{
    recipes{
      id
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
      id
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
