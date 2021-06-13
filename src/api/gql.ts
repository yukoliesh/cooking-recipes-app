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
  query recipesByCategory($category: String!){
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

export const ADD_USER = gql`
  mutation signUp($email: String!, $firstName: String!, $lastName: String!, $password: String!){
    signUp(email: $email, firstName: $firstName, lastName: $lastName, password: $password){
      token,
      user{
        firstName
        lastName
        email
        password
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation logIn($email: String!, $password: String!){
    logIn(email: $email, password: $password){
      token
      user {
        firstName
        lastName
        email
        id
      }
    }
  }
`;



