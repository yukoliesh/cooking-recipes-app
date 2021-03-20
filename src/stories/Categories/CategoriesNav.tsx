import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import styled from '@xstyled/styled-components';
import { Row, Col } from "../../styles/Grids"; 
import { SideHeader, NavButtonTxt } from "../../styles/text";
import { NavButton } from "../../styles/Button";
import Tomato from "../../images/Tomato.png"
import { RECIPES_BY_CATEGORY } from "../../api/gql";

export interface CategoriesNavProps {
  categoryNames: string[];
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


export const CategoriesNav: React.FC<CategoriesNavProps> = ({categoryNames}): JSX.Element => {
  //@ts-ignore
  // let { categoryName } = useParams();
  // const { loading, error, data } = useQuery(RECIPES_BY_CATEGORY, {
  //   variables: { category: categoryName }
  // });
  // console.log("RECIPES_BY_CATEGORY nav", data);
  const colors = ["#ffc107", "#2F4858"]
  return(
    <>
    <RowWidth justifyContent="center" alignItems="center">
      <Col size={1}><CategoryImg src={image.src} alt={image.alt} /></Col>
      <Col size={2}><SideHeader>Categories</SideHeader></Col>
    </RowWidth>
    <RowWidth justifyContent="center" alignItems="flex-end">
      <Col size={1}>
        <NavButton bordercolor="#ffc107" to="/AllRecipes">
          <NavButtonTxt>All Recipes</NavButtonTxt>
        </NavButton>
        <NavButton bordercolor="#ffc107" to="/QuickRecipes">
          <NavButtonTxt>Quick Recipes</NavButtonTxt>
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
      </Col>
    </RowWidth>
  </>
  )
};
