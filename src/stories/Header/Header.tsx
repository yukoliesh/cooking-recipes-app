import React from 'react';
import styled from '@xstyled/styled-components';
import { Flex, Box } from "reflexbox";
import bgImg from '../../images/resized-bg-img.jpg';
import { SearchBox } from '../SearchBox';
import './header.css';

export interface HeaderProps {

}

const Wrapper = styled(Flex)`
  position: relative;
`;

const HeaderBg = styled.div`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  background-color: red;
  width: 100vw;
  height: 50vh;
`;

const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-style: italic;
  background-color: #fff;
  padding: 0.5rem 1rem;
`;
const TitleCont = styled.div`
  flex-grow: 1;
`;
const TitleRowCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 49vh;
`;


export const Header: React.FC<HeaderProps> = (): JSX.Element => (
  <header>
    <Wrapper>
      <HeaderBg>
        <TitleRowCont>
          <Flex>
            <Box size={4}>
              <TitleCont>
                <Title>Explore Your Easy Cooking Recipes!</Title>
              </TitleCont>
            </Box>
            <Box size={1}>
              <SearchBox />
            </Box>
          </Flex>
        </TitleRowCont>
      </HeaderBg>       
    </Wrapper>
  </header>
);
