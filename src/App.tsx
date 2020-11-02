import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Flex, Box } from "reflexbox";
import { Header } from './components/Header';
import { Menu } from './components/MainNav';
import { Categories } from './components/Categories';
import { MainRecipes } from './components/MainRecipes';
import { MiniRecipes } from './components/MiniRecipes';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Flex justifyContent="center">
        <Box width={3 / 4}>
          <Menu onLogin={() => {}} onCreateAccount={() => {}} onLogout={() => {}}/>
          <Flex justifyContent="flex-start" alignItems="flex-start">
            <Box width={1 / 4}>
              <Categories />
            </Box>
            <Box> 
              <MainRecipes />
            </Box>
            <Box>
              <MiniRecipes />
            </Box>
          </Flex>
        </Box>
      </Flex> 
    </Router>
  );
}

export default App;
