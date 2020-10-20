import React from 'react';
import styled from '@xstyled/styled-components';
import { Header } from './Header/Header';
import { Menu } from './Menu/Menu';
import { Row, Col } from '../styles/Grids';
import { Categories } from './Categories';
import { H2, H3 } from "../styles/Text"; 
import Lemon from "../images/Lemon03.png";
import Basil from "../images/Basil.png"
import { Card } from "./Card"; 
import { MiniCard } from "./MiniCard"; 
import './page.css';

export interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
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
const imageBasil = {
  src: Basil,
  alt: '15 min Recipes'
}

export const Page: React.FC<PageProps> = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header />
    <Menu user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

    <Row justifyContent="center" alignItems="flex-start">
      <Col>
        <Categories />
      </Col>
      <Col>
        <section>
        <RowWidth justifyContent="flex-start" alignItems="center">
          <Col><MainTitleImg src={image.src} alt={image.alt} /></Col>
          <Col><H2>60 min Recipes</H2></Col>
        </RowWidth>
        <Card
        title="Agedashi tofu with black pepper broth"
        description="This classic Japanese dish is an impressive side or light meal. This classic Japanese dish is an impressive side or light meal."
        categoryName="Singaporean"
        timeAmount="60 min"
        effortName="Easy"
        imageUrl={require("../images/agedashi-tofu.jpg")}
        imageAlt="Agedashi Tofu"
        />
        <Card
          title="Agedashi tofu with black pepper broth"
          description="This classic Japanese dish is an impressive side or light meal. This classic Japanese dish is an impressive side or light meal."
          categoryName="Singaporean"
          timeAmount="60 min"
          effortName="Easy"
          imageUrl={require("../images/agedashi-tofu.jpg")}
          imageAlt="Agedashi Tofu"
        />
        </section>
      </Col>
      <Col>
        <RowWidth justifyContent="flex-start" alignItems="center">
          <Col><MainTitleImg src={imageBasil.src} alt={imageBasil.alt} /></Col>
          <Col><H3>15 min Recipes</H3></Col>
        </RowWidth>
        <MiniCard 
           title="Beef Yakitori"
           categoryName="Japanese"
           timeAmount="60 min"
           effortName="Easy"
           imageUrl={require("../images/beef-yakitori.jpg")}
           imageAlt="Agedashi Tofu"
        />
      </Col>
    </Row>

    
  </article>
);
