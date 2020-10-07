import React from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled from '@xstyled/styled-components';
import Grid from '@material-ui/core/Grid';
import bgImg from '../../images/resized-bg-img.jpg';
import { SearchBox } from '../SearchBox/SearchBox';
import { Row, Col } from '../../styles/Grids';

// import { StyledButton } from '../Button';
import './header.css';
// import { grids } from '@xstyled/system';

export interface HeaderProps {

}

const Wrapper = styled(Grid)`
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
          <Row>
            <Col size={4}>
              <TitleCont>
                <Title>Explore Your Easy Cooking Recipes!</Title>
              </TitleCont>
            </Col>
            <Col size={1}>
              <SearchBox />
            </Col>
          </Row>
        </TitleRowCont>
      </HeaderBg>       
    </Wrapper>
  </header>
);
