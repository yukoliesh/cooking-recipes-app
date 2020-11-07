import React from 'react';
import styled from '@xstyled/styled-components';
import { Flex, Box } from "reflexbox";
import { SideHeader, NavButtonTxt } from "../../styles/Text";
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


export const CategoriesNav: React.FC<CategoriesNavProps> = ({}: CategoriesNavProps): JSX.Element => {
  
  return (
  <>
    <RowWidth justifyContent="flex-start" alignItems="center" width={1}>
      <Box><CategoryImg src={image.src} alt={image.alt} /></Box>
      <Box><SideHeader>Categories</SideHeader></Box>
    </RowWidth>
    <RowWidth justifyContent="flex-end" alignItems="flex-end">
      <Box width={1}>
        <NavButton bordercolor="#ffc107" to="/All">
          <NavButtonTxt>All</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#2F4858" to="/Chinese">
          <NavButtonTxt>Chinese</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#315771" to="/Indian">
          <NavButtonTxt>Indian</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#33658A" to="/Japanese">
          <NavButtonTxt>Japanese</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#5D90B1" to="/Korean">
          <NavButtonTxt>Korean</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#86BBD8" to="/Malaysian">
          <NavButtonTxt>Malaysian</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#C3C16C" to="/Singaporean">
          <NavButtonTxt>Singaporean</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#FFC700" to="/Taiwanese">
          <NavButtonTxt>Taiwanese</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#F9960D" to="/Thai">
          <NavButtonTxt>Thai</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#F26419" to="/Vietnamese">
          <NavButtonTxt>Vietnamese</NavButtonTxt>
        </NavButton>
      </Box>
    </RowWidth>
  </>
)};
