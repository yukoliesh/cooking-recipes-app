import React from 'react';
import styled from '@xstyled/styled-components';
import { Flex, Box } from "reflexbox";
import { H2 } from "../../styles/Text"; 
import { Card } from "./Card";
import Lemon from "../../images/Lemon03.png";

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

export interface MainRecipesProps {

}

export const MainRecipes: React.FC<MainRecipesProps> = ({}: MainRecipesProps): JSX.Element => {
  return (
    <RowWidth alignItems="center">
      <Flex justifyContent="flex-start" alignItems="center">
        <div className="cropped">
          <MainTitleImg src={image.src} alt={image.alt} />
        </div>
        <H2>60 min Recipes</H2>
      </Flex>
      <Flex>
        <Box>
        <Card
          title="Agedashi tofu with black pepper broth"
          description="This classic Japanese dish is an impressive side or light meal. This classic Japanese dish is an impressive side or light meal."
          categoryName="Singaporean"
          timeAmount="60 min"
          effortName="Easy"
          imageUrl={require("../../images/agedashi-tofu.jpg")}
          imageAlt="Agedashi Tofu"
          detailPagePath="/"
          categoryPagePath="/"
          />
        </Box>
      </Flex>
    </RowWidth>
  )}