import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from '@xstyled/styled-components';
import { Header } from './Header/Header';
import { Menu } from './Menu/Menu';
import { Flex, Box } from "reflexbox";
import { Categories } from './Categories';
import { H2, H3 } from "../styles/text"; 
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

const MainCont = styled(Flex)`
  width: 80vw;
  margin: 0 auto;
`;

const RowWidth = styled(Box)`
  width: 50vw;
  max-width: 550px;
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

export const Page: React.FC<PageProps> = ({ user, onLogin, onLogout, onCreateAccount }: PageProps): JSX.Element => {
  return (
    <Router>
      <article>
        <Header />
          <MainCont justifyContent="center" alignItems="center">
            <Box width={1}>
              <Flex>
                <Box width={1} flex={1}> <Menu user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} /> </Box>
              </Flex>
              <Flex>
                <Box width={1 / 4}><Categories /></Box>
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
                      imageUrl={require("../images/agedashi-tofu.jpg")}
                      imageAlt="Agedashi Tofu"
                      detailPagePath="/"
                      categoryPagePath="/"
                      />
                    </Box>
                  </Flex>
                </RowWidth>
                <Box width={1 / 4}>
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
                      imageUrl={require("../images/beef-yakitori.jpg")}
                      imageAlt="Agedashi Tofu"
                      detailPagePath="/"
                      categoryPagePath="/"
                    />
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </MainCont>
      </article>
  </Router>
)};
