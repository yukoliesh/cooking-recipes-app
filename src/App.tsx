import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Flex, Box } from "reflexbox";
import { Header } from './components/Header';
import { Menu } from './components/MainNav';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Flex justifyContent="center">
        <Box width={3 / 4}>
          <Menu onLogin={() => {}} onCreateAccount={() => {}} onLogout={() => {}}/>
        </Box>
      </Flex> 
    </Router>
  );
}

export default App;
