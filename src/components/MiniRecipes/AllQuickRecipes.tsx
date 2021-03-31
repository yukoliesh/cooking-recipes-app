import React from 'react';
import styled from '@xstyled/styled-components';
import { useQuery } from "@apollo/client";
import { Flex, Box } from "reflexbox";
import { H2 } from "../../styles/text";
import { Card } from "../Card";
import Peas from "../../images/Peas.png";
import { RECIPES } from "../../api/gql";


const MainTitleImg = styled.img`
  width: 8rem;
`;
const image = {
  src: Peas,
  alt: 'Categories'
}
const CroppedImg = styled.div`
  width: 7rem;
  overflow: hidden;
  margin: -20px 0 0 -35px;
`;
export interface AllQuickRecipesProps {

}

export const AllQuickRecipes: React.FC<AllQuickRecipesProps> = (AllQuickRecipesProps): JSX.Element => {
  const { loading, error, data } = useQuery(RECIPES);
  if(loading) return <p>Loading Detailed Recipe...</p> 
  if(error) return <p>Error loading Detailed Recipe!</p> 
  
  const miniRecipes = data.recipes.filter(item => item.totalTime <= 15 );

  return (
    <>
      <Flex>
        <Box>
          <Flex justifyContent="flex-start">
            <Box>
              <CroppedImg>
                <MainTitleImg src={image.src} alt={image.alt} />
              </CroppedImg>
            </Box>
            <Box>
              <H2>All Quick Recipes</H2>
            </Box>
          </Flex>
          <Flex justifyContent="flex-start" flexWrap="wrap">
            {miniRecipes.map(item => (
              <Box>
                <Card
                  key={item.id}
                  itemId={item.id}
                  title={item.title}
                  description={item.description}
                  categoryName={item.category}
                  timeAmount={`${item.totalTime} min`}
                  effortLevel={item.effort}
                  imageUrl={require(`../../images/${item.category}/${item.image}`)}
                  imageAlt={item.title}
                  detailPagePath={`/Details/${item.title}`}
                  categoryPagePath={`/Category/${item.category}`}
                  onSelectedRecipe={()=>{}}
                />
              </Box>
            ))
            }
          </Flex>
        </Box>
      </Flex>
    </>
  )};