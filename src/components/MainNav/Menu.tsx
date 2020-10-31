import React from 'react';
import styled from '@xstyled/styled-components';
import { Flex, Box } from "reflexbox";
import { StyledButton } from '../Button';
import Link from '@material-ui/core/Link';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../styles/theme'; 

import Logo from "../../stories/assets/logo.svg";
import './menu-style.ts';

export interface MenuProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export default {
  title: 'img'
}

const image = {
  src: Logo,
  alt: 'Easy Cooking logo'
}

const RGrid = styled(Box)`
  text-align: right;
`;

const SpacedLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin-right: 16px !important;
`;


export const Menu: React.FC<MenuProps> = ({ user, onLogin, onLogout, onCreateAccount }: MenuProps): JSX.Element => {
  // const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  return (
    <ThemeProvider theme={theme}>
      <Flex justifyContent="flex-start" alignItems="center" marginBottom={4}>
        <Box width={1 / 2}>
          <img src={image.src} alt={image.alt} />
        </Box>
        <RGrid width={1 / 2}>
          <Flex alignItems="center">
            <Box>
              <nav>
                <SpacedLink href="#" onClick={preventDefault} color="secondary">
                  Recipes
                </SpacedLink>
                <SpacedLink href="#" onClick={preventDefault} color="secondary">
                  Categories
                </SpacedLink>
                <SpacedLink href="#" onClick={preventDefault} color="secondary">
                  Favorites
                </SpacedLink>
              </nav>
            </Box>
            <Box width={1 / 4}>
              <Flex justifyContent="flex-end" width="200px">
              {user ? (
                <Box>
                  <StyledButton size="small" onClick={onLogout} label="Sign out" />
                </Box>
              ) : (
                <>
                  <Box>
                    <StyledButton size="small" onClick={onLogin} label="Sign in" />
                  </Box>
                  <Box>
                    <StyledButton primary size="small" onClick={onCreateAccount} label="Sign up" />
                  </Box>
                </>
              )}
              </Flex>
            </Box>
          </Flex>
        </RGrid>
        
      </Flex>
    </ThemeProvider>
  )
};