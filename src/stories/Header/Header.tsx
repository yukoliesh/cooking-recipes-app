import React from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled, { css } from '@xstyled/styled-components';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import bgImg from '../../images/resized-bg-img.jpg';
import { SearchBox } from '../SearchBox/SearchBox';

// import { StyledButton } from '../Button';
import './header.css';
// import { grids } from '@xstyled/system';

export interface HeaderProps {

}

const Wrapper = styled(Grid)`
  position: relative;
`;

const HeaderImg = styled.div`
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


export const Header: React.FC<HeaderProps> = () => (
  <header>
    <Wrapper>
      <HeaderImg>
        <Box 
          display="flex"
          alignItems="flex-end"
          p={1}
          m={1}
          css={{height: 200}}>
          <Box p={1} flexGrow={1}>
            <Title>Explore Your Easy Cooking Recipes!</Title>
          </Box>
          <Box p={1}>
            <SearchBox />
          </Box>
        </Box>
      </HeaderImg>       
    </Wrapper>
  </header>
);
