import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import styled from '@xstyled/styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Flex, Box } from "reflexbox";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { H2, H3 } from '../../styles/text';
import { DetailsImage, InfoTxt, IngredientsList, IngredientsListItem, StepList, StepListItem } from './detailsStyle';
import { RECIPE_BY_TITLE } from "../../api/gql";

const FavoriteToggleLabel = styled.label`
  display: none;
`;
const FavoriteToggleButton = styled(FormControlLabel)`
  span:nth-child(2){
    display: none;
  }
`;

export interface DetailsPageProps {
  onFavoriteButtonChange (e): React.MouseEventHandler<HTMLInputElement>;
  isFavorite: boolean;
  recipeTitle: string;
}

export const DetailsPage: React.FC<DetailsPageProps> = ({onFavoriteButtonChange, isFavorite, recipeTitle}): JSX.Element => {
  //@ts-ignore
  let { recipeName } = useParams();
  const { loading, error, data } = useQuery(RECIPE_BY_TITLE, {
    variables: { title: recipeName.replaceAll("-", " ") },
  });
  if(loading) return <p>Loading Detailed Recipe...</p> 
  if(error) return <p>Error loading Detailed Recipe!</p> 

  const recipeNameForId = recipeName.replace(" ", "-").toLowerCase();
  console.log("date from details", data);

  const item = data.recipeByTitle;
  if(!item) return <p>Recipe not found...</p> 
  return (
    <>
      <Flex flexDirection="column">
        <Box width={3 / 4} key={item.id}>
          <Box pb={4}>
            <Flex width={1} alignItems="center">
              <Box pr={3}><H2>{item.title}</H2></Box>
              <Box>
                <FavoriteToggleLabel htmlFor={recipeNameForId}>
                  {recipeTitle}
                </FavoriteToggleLabel>
                  <FavoriteToggleButton
                    control={<Checkbox inputProps={{'aria-label': `${recipeNameForId}_is_favorite`}} icon={<FavoriteBorderIcon />}
                    checkedIcon={<FavoriteIcon />} 
                    name="checkedH" />}
                    label={`${recipeNameForId}`}
                    onChange={e => onFavoriteButtonChange(e)}
                  />
              </Box>
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
          <Box key={`${i}_${i.name}`}>
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
                <StepListItem key={s.step}>
                  {s.step}
                </StepListItem>
              ))}
            </StepList>
          </Box>
        </Box>
      </Flex>
    </>
  ); 
};