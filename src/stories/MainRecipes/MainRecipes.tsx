import React from 'react';
import styled from '@xstyled/styled-components';
import { Row, Col } from "../../styles/Grids"; 
import { MainHeader } from "../../styles/Text"; 
import { Card } from "../Card"; 
import Lemon from "../../images/Lemon03.png"

export interface MainRecipesProps {

}
const RowWidth = styled(Row)`
  width: 50vw;
  max-width: 500px;
`;

const MainTitleImg = styled.img`
  width: 8rem;
`;

export default {
  title: 'img'
}

const image = {
  src: Lemon,
  alt: '60 min Recipes'
}
export const MainRecipes: React.FC<MainRecipesProps> = (): JSX.Element => (
  <>
    <RowWidth justifyContent="flex-start" alignItems="center">
      <Col><MainTitleImg src={image.src} alt={image.alt} /></Col>
      <Col><MainHeader>60 min Recipes</MainHeader></Col>
    </RowWidth>
    <Row justifyContent="flex-start" alignItems="flex-start">
      <Col>
        <Card
          title="Agedashi tofu with black pepper broth"
          description="This classic Japanese dish is an impressive side or light meal."
          categoryName="Japanese"
          timeAmount="60 min"
          effortName="Easy"
          image="../../images/agedashi-tofu.jpg"
        />
      </Col>
    </Row>
  </>
);