import React from 'react';
import styled from '@xstyled/styled-components';
import { Flex, Box } from "reflexbox";
import bgImg from '../../images/resized-bg-img.jpg';
import { SearchBox } from '../SearchBox';
import './header.css';

export interface HeaderProps {

}

const Wrapper = styled.div`
  position: relative;
`;

const HeaderBg = styled.div`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  background-color: #fff;
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

const RightAlignedBox = styled(Box)`
  text-align: right;
`;


export const Header: React.FC<HeaderProps> = (): JSX.Element => (
  <header>
    <Wrapper>
      <HeaderBg>
        <Flex justifyContent="flex-start" alignItems="flex-end" height="49vh">
          <Box>
            <Title>Explore Your Easy Cooking Recipes!</Title>
          </Box>
          <RightAlignedBox width={3 / 4}>
            <SearchBox />
          </RightAlignedBox>
        </Flex>
      </HeaderBg>       
    </Wrapper>
  </header>
);
