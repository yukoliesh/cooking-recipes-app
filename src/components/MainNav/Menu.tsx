import React from 'react';
import styled from '@xstyled/styled-components';
import { Flex, Box } from "reflexbox";
import { StyledButton } from '../Button';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../styles/theme'; 
import Logo from "../../stories/assets/logo.svg";


export interface MenuProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
  userFirstName: string;
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
  color: #4d4d4d;
  text-decoration: none;
`;

const WelcomeText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  text-transform: uppercase;
`;


export const Menu: React.FC<MenuProps> = ({ isLoggedIn, onLogin, onLogout, onCreateAccount, userFirstName }: MenuProps): JSX.Element => {

  return (
    <ThemeProvider theme={theme}>
      <Flex justifyContent="space-between" alignItems="center" marginBottom={4}>
        <Box width="auto">
          <Link to="/"><img src={image.src} alt={image.alt} /></Link>
        </Box>
        <RGrid width={2 / 3}>
          <Flex alignItems="center" justifyContent="flex-end">
            {isLoggedIn && (
              <Box pr="3"><WelcomeText>{`WELCOME BACK, ${userFirstName}!`}</WelcomeText></Box>
            )}
            <Box width="auto">
              <nav>
                <SpacedLink to="/AllRecipes" color="secondary" aria-label="Recipes link">
                  RECIPES
                </SpacedLink>
                <SpacedLink to="/AllCategories" color="secondary" aria-label="Categories link">
                  CATEGORIES
                </SpacedLink>
                <SpacedLink to="/Favorites" color="secondary" aria-label="Favorites link">
                  FAVORITES
                </SpacedLink>
              </nav>
            </Box>
            <Box width={1 / 4}>
              <Flex justifyContent={isLoggedIn ? "flex-start" : "flex-end"} width="200px">
              {isLoggedIn ? (
                <Box>
                  <StyledButton size="small" onClick={onLogout} label="SIGN OUT" />
                </Box>
              ) : (
                <>
                  <Box>
                    <StyledButton size="small" onClick={onLogin} label="SIGN IN" />
                  </Box>
                  <Box>
                    <StyledButton primary size="small" onClick={onCreateAccount} label="SIGN UP" />
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