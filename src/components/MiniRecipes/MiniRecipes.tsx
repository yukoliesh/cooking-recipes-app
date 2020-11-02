import React from 'react';
import styled from '@xstyled/styled-components';
import { Flex, Box } from "reflexbox";
import { H3 } from "../../styles/Text"; 
import { MiniCard } from "./MiniCard";
import Basil from "../../images/Basil.png"

const RowWidth = styled(Box)`
  width: 50vw;
  max-width: 550px;
`;
const MainTitleImg = styled.img`
  width: 8rem;
`;
const imageBasil = {
  src: Basil,
  alt: '15 min Recipes'
}

export interface MainRecipesProps {

}

export const MiniRecipes: React.FC<MainRecipesProps> = ({}: MainRecipesProps): JSX.Element => {
  return (
    <>
    <RowWidth alignItems="center">
      <Flex justifyContent="flex-start" alignItems="center">
        <div className="cropped-mini">
          <MainTitleImg src={imageBasil.src} alt={imageBasil.alt} />
        </div>
        <H3>15 min Recipes</H3>
      </Flex>
    </RowWidth>
    <Flex>
      <Box>
        <MiniCard 
        title="Beef Yakitori"
        categoryName="Japanese"
        timeAmount="60 min"
        effortName="Easy"
        imageUrl={require("../../images/beef-yakitori.jpg")}
        imageAlt="Agedashi Tofu"
        detailPagePath="/"
        categoryPagePath="/"
      />
      </Box>
    </Flex>
    </>
  )}