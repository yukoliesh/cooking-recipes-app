import React from 'react';
import { useQuery } from "@apollo/client";
import styled from '@xstyled/styled-components';
import { th } from "@xstyled/system";
import { Flex, Box } from "reflexbox";
import { H3 } from "../../styles/text"; 
import { MiniCard } from "./MiniCard";
import { StyledButton } from '../Button';
import Basil from "../../images/Basil.png"
// import history from '../../history';
import { handleReverseOrder } from "../../shared";
import { RECIPES } from "../../api/gql";

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
  onMoreRecipesClick: () => void;
}

export const MiniRecipes: React.FC<MiniRecipesProps> = ({
  onMoreRecipesClick
}: MiniRecipesProps): JSX.Element => {
  const { loading, error, data } = useQuery(RECIPES);
  
  if(loading) return <p>Loading mini recipes Recipe...</p> 
  if(error) return <p>Error loading mini recipes Recipe!</p> 
  
  const quickList = handleReverseOrder(data.recipes).filter(item => item.totalTime <= 15);
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
            detailPagePath={`/Details/${item.title}`}
            categoryPagePath="/"
          />
          ))}
        </Box>
      </Flex>
      <Flex>
        <Box>
          {/* <MoreButton size="large" label="More Quick Recipes" onClick={() => history.push('/QuickRecipes') /> */}
          <MoreButton size="large" label="More Quick Recipes" onClick={onMoreRecipesClick} />
        </Box>
      </Flex>
    </RowWidth>
  )}