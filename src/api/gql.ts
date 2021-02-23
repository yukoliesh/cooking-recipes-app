import { gql } from "@apollo/client";

export const RECIPES = gql`
  query recipes{
    recipes{
      id
      title
      description
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


export const RECIPE_BY_ID = gql`
  query recipeById($id: String!){
    recipeById{
      id
      title
      description
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
