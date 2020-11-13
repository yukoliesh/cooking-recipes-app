import React from 'react';
import { Flex, Box } from "reflexbox";
import { H2, H3 } from '../../styles/text';
import { DetailsImage, InfoTxt, IngredientsList, IngredientsListItem } from './detailsStyle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


export interface DetailsPageProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  categoryName: string;
  prepTime: number;
  cookTime: number;
  difficulty: string;
  // ingredients: [];
}

export const DetailsPage: React.FC<DetailsPageProps> = ({  
  title,
  description,
  imageUrl,
  imageAlt,
  categoryName,
  prepTime,
  cookTime,
  difficulty,
  // ingredients
}: DetailsPageProps): JSX.Element => {
  return (
    <>
      <Flex flexDirection="column">
        <Box pb={4}>
          <Flex width={1} alignItems="center">
            <Box pr={2}><H2>{title}</H2></Box>
            <Box><FavoriteBorderIcon color="secondary" /></Box>
          </Flex>
        </Box>
        <Box pb={4}>
          <DetailsImage src={imageUrl} alt={imageAlt} />
        </Box>
        <Box pb={4}>
          {description}
        </Box>
        <Box pb={8}>
          <Flex width={1}>
            <Box width={1 / 4}>
              <Flex flexDirection="column">
                <Box>Category</Box>
                <Box><InfoTxt>{categoryName}</InfoTxt></Box>
              </Flex>
            </Box>
            <Box width={1 / 4}>
              <Flex flexDirection="column">
                <Box>Prep Time</Box>
                <Box><InfoTxt>{prepTime} min</InfoTxt></Box>
              </Flex>
            </Box>
            <Box width={1 / 4}>
              <Flex flexDirection="column">
                <Box>Cooking Time</Box>
                <Box><InfoTxt>{cookTime} min</InfoTxt></Box>
              </Flex>
            </Box>
            <Box width={1 / 4}>
              <Flex flexDirection="column">
                <Box>Difficulty</Box>
                <Box><InfoTxt>{difficulty}</InfoTxt></Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box>
          <H3>Ingredients</H3>
          {/* <IngredientsList>
            <IngredientsListItem />
          </IngredientsList> */}
        </Box>
      </Flex>
      
      
    </>
  ); 
};