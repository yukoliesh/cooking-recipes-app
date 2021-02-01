import React from 'react';
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Flex, Box } from "reflexbox";
import { H2, H3 } from '../../styles/text';
import { DetailsImage, InfoTxt, IngredientsList, IngredientsListItem, StepList, StepListItem } from './detailsStyle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { RECIPE_BY_ID } from "../../api/gql";

export interface DetailsPageProps {
  // title: string;
  // description: string;
  // imageUrl: string;
  // imageAlt: string;
  // categoryName: string;
  // prepTime: number;
  // cookTime: number;
  // difficulty: string;
  // ingredients: [];
}

export const DetailsPage: React.FC<DetailsPageProps> = ({  
  // title,
  // description,
  // imageUrl,
  // imageAlt,
  // categoryName,
  // prepTime,
  // cookTime,
  // difficulty,
  // ingredients
}: DetailsPageProps): JSX.Element => {
  //@ts-ignore
  let { recipeName } = useParams();
  const { loading, error, data } = useQuery(RECIPE_BY_ID);
  const details = data.filter(item => item.title === `${recipeName}`);
  console.log("detail", details);

  if(loading) return <p>Loading Detailed Recipe...</p> 
  if(error) return <p>Error loading Detailed Recipe!</p> 

  return (
    <>
    {details.map(item => (
      <Flex flexDirection="column">
        <Box width={3 / 4} key={item.id}>
          <Box pb={4}>
            <Flex width={1} alignItems="center">
              <Box pr={2}><H2>{item.title}</H2></Box>
              <Box><FavoriteBorderIcon color="secondary" /></Box>
            </Flex>
          </Box>
          <Box pb={4}>
            <DetailsImage src={require(`../../images/${item.category}/${item.image}`)} alt={item.title} />
          </Box>
          <Box pb={5}>
            {item.description}
          </Box>
          <Box pb={5}>
            <Flex width={1}>
              <Box width={1 / 4}>
                <Flex flexDirection="column">
                  <Box>Category</Box>
                  <Box><InfoTxt>{item.category}</InfoTxt></Box>
                </Flex>
              </Box>
              <Box width={1 / 4}>
                <Flex flexDirection="column">
                  <Box>Prep Time</Box>
                  <Box><InfoTxt>{item.prepTime} min</InfoTxt></Box>
                </Flex>
              </Box>
              <Box width={1 / 4}>
                <Flex flexDirection="column">
                  <Box>Cooking Time</Box>
                  <Box><InfoTxt>{item.cookTime} min</InfoTxt></Box>
                </Flex>
              </Box>
              <Box width={1 / 4}>
                <Flex flexDirection="column">
                  <Box>Difficulty</Box>
                  <Box><InfoTxt>{item.effort}</InfoTxt></Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box>
            <H3>Ingredients</H3> 
          </Box>
          {item.ingredients.map(i => (
          <Box>
            <IngredientsList>
              <IngredientsListItem>
                {i.name}
              </IngredientsListItem>
            </IngredientsList>
          </Box>
          ))}
          {/* {item.Steps.map(method => (
            {method.step}
          ))} */}
          <Box pt={4}>
              <H3>Steps</H3>
          </Box>
          <Box>
            <StepList>
              {item.steps.map(s => (
                <StepListItem>
                  {s.step}
                </StepListItem>
              ))}
            </StepList>
          </Box>
        </Box>
      </Flex>
    ))}
      
      
      
    </>
  ); 
};