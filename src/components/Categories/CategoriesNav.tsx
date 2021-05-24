import React from 'react';
import styled from '@xstyled/styled-components';
import { Flex, Box } from "reflexbox";
import { SideHeader, NavButtonTxt } from "../../styles/text";
import { NavButton } from "../../styles/Button";
import Tomato from "../../images/Tomato.png"

export interface CategoriesNavProps {
  categoryNames: string[];
}

const CategoryImg = styled.img`
  width: 100%;
`;

const CategoryNavCroppedImg = styled.div`
  width: 3.5rem;
  overflow: hidden;
  margin: 0.25rem 0.5rem 0 0;
`;

const RowWidth = styled(Flex)`
  width: 15vw;
  max-width: 250px;
`;

export default {
  title: 'img'
}

const image = {
  src: Tomato,
  alt: 'Categories Navigation'
}


export const CategoriesNav: React.FC<CategoriesNavProps> = ({categoryNames}): JSX.Element => {
  const colors = ["#ffc107", "#2F4858", "#315771", "#33658A", "#5D90B1", "#86BBD8", "#C3C16C", "#FFC700", "#F9960D", "#F26419"]
  return (
  <>
    <RowWidth justifyContent="flex-start" alignItems="center" width={1}>
      <Box><CategoryNavCroppedImg><CategoryImg src={image.src} alt={image.alt} /></CategoryNavCroppedImg></Box>
      <Box><SideHeader>Categories</SideHeader></Box>
    </RowWidth>
    <RowWidth justifyContent="flex-end" alignItems="flex-end">
      <Box width={1}>
        <NavButton bordercolor="#ffc107" to="/AllRecipes" key="cat01">
          <NavButtonTxt>All Recipes</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#ffc107" to="/QuickRecipes" key="cat02">
          <NavButtonTxt>Quick Recipes</NavButtonTxt>
        </NavButton>
        {categoryNames.map((name, index) => (
          <NavButton bordercolor={colors[index]} to={`/Category/${name}`} key={name}>
            <NavButtonTxt>{name}</NavButtonTxt>
          </NavButton>
        ))}
      </Box>
    </RowWidth>
  </>
)};
