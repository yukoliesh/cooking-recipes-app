import React from 'react';
import styled from '@xstyled/styled-components';
import { Flex, Box } from "reflexbox";
import { H2 } from "../../styles/Text";
import { Card } from "../Card";
import Peas from "../../images/Peas.png";
import { recipes } from "../../data/MockData";


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

export const AllQuickRecipes: React.FC<AllQuickRecipesProps> = ({
}: AllQuickRecipesProps): JSX.Element => {
  console.log("rec", recipes);
  const miniRecipes = recipes.filter(item => item.totalTime <= 15 );
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
                  detailPagePath="/"
                  categoryPagePath="/"
                  onRecipeClicked={()=>{}}
                />
              </Box>
            ))
            }
          </Flex>
        </Box>
      </Flex>
    </>
  )};