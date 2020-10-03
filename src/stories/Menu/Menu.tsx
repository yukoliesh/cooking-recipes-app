import React from 'react';
import styled from '@xstyled/styled-components';
import Grid from '@material-ui/core/Grid';
import { StyledButton } from '../Button';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../styles/theme'; 

import Logo from "../assets/logo.svg";
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

const RGrid = styled(Grid)`
  text-align: right;
`;

const SpacedLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin-right: 8px !important;
`;

export const Menu: React.FC<MenuProps> = ({ user, onLogin, onLogout, onCreateAccount }: MenuProps): JSX.Element => {
  // const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item xs={6} >
            <img src={image.src} alt={image.alt} />
          </Grid>
          <RGrid item xs={4}>
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
          </RGrid>
          <Grid item>
            {user ? (
              <StyledButton size="small" onClick={onLogout} label="Sign out" />
            ) : (
              <>
                <StyledButton size="small" onClick={onLogin} label="Sign in" />
                <StyledButton primary size="small" onClick={onCreateAccount} label="Sign up" />
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
};