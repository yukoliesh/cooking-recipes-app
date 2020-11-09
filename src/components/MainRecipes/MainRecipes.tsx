import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from "@xstyled/system";
import { StyledButton } from '../Button';
import { Flex, Box } from "reflexbox";
import { H2 } from "../../styles/Text"; 
import { Card } from "./index";
import Lemon from "../../images/Lemon03.png";
import { recipes } from "../../data/MockData";

const RowWidth = styled(Box)`
  width: 50vw;
  max-width: 550px;
`;
const MainTitleImg = styled.img`
  width: 8rem;
`;
const image = {
  src: Lemon,
  alt: '60 min Recipes'
}

const MoreButton = styled(StyledButton)`
  width: 50vw;
  max-width: 500px;
  padding: ${th.space(3)} ${th.space(4)} !important;
`;

const CroppedImg = styled.div`
  width: 7rem;
  overflow: hidden;
  margin: -10px 0 0 -35px;
`;


export interface MainRecipesProps {

}

export const MainRecipes: React.FC<MainRecipesProps> = ({}: MainRecipesProps): JSX.Element => {
  const limitMainRecipes = recipes.slice(0,5);
  // const [selectedId, setSelectedId] = React.useState("");

  const onSelectedRecipe = (e: any) => {
    const id = e.target;
    console.log("id", id);
    console.log("hello");
  }
  // console.log("id", selectedId);
  return (
    <RowWidth>
      <Flex width={1}>
        <Box>
          <CroppedImg>
            <MainTitleImg src={image.src} alt={image.alt} />
          </CroppedImg>
        </Box>
        <Box>
          <H2>60 min Recipes</H2>
        </Box>
      </Flex>
      <Box width={1}>
        {limitMainRecipes && limitMainRecipes.map(item => (
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
          detailPagePath="/Details"
          categoryPagePath={`/${item.category}`}
          onRecipeClicked={onSelectedRecipe}
          />
        ))}
      </Box>
      <Box width={1}>
        <MoreButton size="large" label="More Recipes" primary />
      </Box>
    </RowWidth>
  )}