import React from 'react';
import styled from '@xstyled/styled-components';
import { Row, Col } from "../../styles/Grids"; 
import { SideHeader, NavButtonTxt } from "../../styles/Text";
import { NavButton } from "../../styles/Button";
import Tomato from "../../images/Tomato.png"

export interface CategoriesProps {

}

const CategoryImg = styled.img`
  width: 4rem;
`;

const RowWidth = styled(Row)`
  width: 15vw;
  max-width: 300px;
`;

export default {
  title: 'img'
}

const image = {
  src: Tomato,
  alt: 'Categories Navigation'
}


export const Categories: React.FC<CategoriesProps> = (): JSX.Element => (
  <>
    <RowWidth justifyContent="center" alignItems="center">
      <Col size={1}><CategoryImg src={image.src} alt={image.alt} /></Col>
      <Col size={2}><SideHeader>Categories</SideHeader></Col>
    </RowWidth>
    <RowWidth justifyContent="center" alignItems="flex-end">
      <Col size={1}>
        <NavButton borderColor="#2F4858">
          <NavButtonTxt>Chinese</NavButtonTxt>
        </NavButton>
        <NavButton borderColor="#315771">
          <NavButtonTxt>Indian</NavButtonTxt>
        </NavButton>
        <NavButton borderColor="#33658A">
          <NavButtonTxt>Japanese</NavButtonTxt>
        </NavButton>
        <NavButton borderColor="#5D90B1">
          <NavButtonTxt>Korean</NavButtonTxt>
        </NavButton>
        <NavButton borderColor="#86BBD8">
          <NavButtonTxt>Malaysian</NavButtonTxt>
        </NavButton>
        <NavButton borderColor="#C3C16C">
          <NavButtonTxt>Singaporean</NavButtonTxt>
        </NavButton>
        <NavButton borderColor="#FFC700">
          <NavButtonTxt>Taiwanese</NavButtonTxt>
        </NavButton>
        <NavButton borderColor="#F9960D">
          <NavButtonTxt>Thai</NavButtonTxt>
        </NavButton>
        <NavButton borderColor="#F26419">
          <NavButtonTxt>Vietnamese</NavButtonTxt>
        </NavButton>
      </Col>
    </RowWidth>
  </>
);
