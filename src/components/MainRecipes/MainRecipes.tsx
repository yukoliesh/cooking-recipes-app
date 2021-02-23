import React from 'react';
import { useQuery } from "@apollo/client";
import styled from '@xstyled/styled-components';
import { th } from "@xstyled/system";
import { StyledButton } from '../Button';
import { Flex, Box } from "reflexbox";
import { H2 } from "../../styles/text"; 
import { Card } from "./index";
import Lemon from "../../images/Lemon03.png";
import { handleReverseOrder } from "../../shared";
import { RECIPES } from "../../api/gql";

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
  onMoreRecipesClick: () => void;
}

export const MainRecipes: React.FC<MainRecipesProps> = ({
  onMoreRecipesClick
}: MainRecipesProps): JSX.Element => {
  const { loading, error, data } = useQuery(RECIPES);

  console.log("data", data);

  if(loading) return <p>Loading main recipes Recipe...</p> 
  if(error) return <p>Error loading from main recipes Recipe!</p> 
  
  const limitMainRecipes = handleReverseOrder(data).slice(0,5);



  // const [selectedId, setSelectedId] = React.useState("");



  // const onSelectedRecipe = (id: string): void => {
  //   const selected = recipes.filter((c): boolean => c.id === id)[0] || recipes[0];
  //   return setSelectedId(selected.id);
  // }
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
          detailPagePath={`/Details/${item.title}`}
          categoryPagePath={`/${item.category}`}
          onSelectedRecipe={() => {}}
          />
        ))}
      </Box>
      <Box width={1}>
        <MoreButton size="large" label="More Recipes" primary onClick={onMoreRecipesClick} />
      </Box>
    </RowWidth>
  )}