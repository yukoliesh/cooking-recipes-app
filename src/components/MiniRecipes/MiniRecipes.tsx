import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from "@xstyled/system";
import { Flex, Box } from "reflexbox";
import { H3 } from "../../styles/Text"; 
import { MiniCard } from "./MiniCard";
import { StyledButton } from '../Button';
import Basil from "../../images/Basil.png"
import { recipes } from "../../data/MockData";

const RowWidth = styled(Box)`
  width: 50vw;
  max-width: 550px;
`;
const MainTitleImg = styled.img`
  width: 7rem;
`;
const imageBasil = {
  src: Basil,
  alt: '15 min Recipes'
}

const MoreButton = styled(StyledButton)`
  width: 50vw;
  max-width: 485px;
  padding: ${th.space(3)} ${th.space(4)} !important;
`;

const MiniCroppedImg = styled.div`
  width: 5.5rem;
  overflow: hidden;
  margin: 0 0 0 -40px;
`;


export interface MiniRecipesProps {

}

export const MiniRecipes: React.FC<MiniRecipesProps> = ({}: MiniRecipesProps): JSX.Element => {
  const quickList = recipes.filter(item => item.totalTime <= 15);
  const limitMainRecipes = quickList.slice(0,10);

  return (
    <RowWidth>
      <Flex justifyContent="flex-start" alignItems="center">
        <MiniCroppedImg>
          <MainTitleImg src={imageBasil.src} alt={imageBasil.alt} />
        </MiniCroppedImg>
        <H3>15 min Recipes</H3>
      </Flex>
      <Flex>
        <Box>
        {limitMainRecipes && limitMainRecipes.map(item => (
          <MiniCard
            key={item.id}
            title={item.title}
            categoryName={item.category}
            timeAmount={`${item.totalTime} min`}
            effortLevel={item.effort}
            imageUrl={require(`../../images/${item.category}/${item.image}`)}
            imageAlt={item.title}
            detailPagePath="/"
            categoryPagePath="/"
          />
          ))}
        </Box>
      </Flex>
      <Flex>
        <Box>
          <MoreButton size="large" label="More Quick Recipes" />
        </Box>
      </Flex>
    </RowWidth>
  )}