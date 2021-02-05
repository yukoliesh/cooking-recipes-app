import React from 'react';
import styled from '@xstyled/styled-components';
import { Flex, Box } from "reflexbox";
import { SideHeader, NavButtonTxt } from "../../styles/text";
import { NavButton } from "../../styles/Button";
import Tomato from "../../images/Tomato.png"

export interface CategoriesNavProps {

}

const CategoryImg = styled.img`
  width: 4rem;
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


export const CategoriesNav: React.FC<CategoriesNavProps> = (CategoriesNavProps): JSX.Element => {
  
  return (
  <>
    <RowWidth justifyContent="flex-start" alignItems="center" width={1}>
      <Box><CategoryImg src={image.src} alt={image.alt} /></Box>
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
        <NavButton bordercolor="#2F4858" to="/Category/Chinese" key="cat03">
          <NavButtonTxt>Chinese</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#315771" to="/Category/Indian" key="cat04">
          <NavButtonTxt>Indian</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#33658A" to="/Category/Japanese" key="cat05">
          <NavButtonTxt>Japanese</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#5D90B1" to="/Category/Korean" key="cat06">
          <NavButtonTxt>Korean</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#86BBD8" to="/Category/Malaysian" key="cat07">
          <NavButtonTxt>Malaysian</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#C3C16C" to="/Category/Singaporean" key="cat08">
          <NavButtonTxt>Singaporean</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#FFC700" to="/Category/Taiwanese" key="cat09">
          <NavButtonTxt>Taiwanese</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#F9960D" to="/Category/Thai" key="cat10">
          <NavButtonTxt>Thai</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#F26419" to="/Category/Vietnamese" key="cat11">
          <NavButtonTxt>Vietnamese</NavButtonTxt>
        </NavButton>
      </Box>
    </RowWidth>
  </>
)};
