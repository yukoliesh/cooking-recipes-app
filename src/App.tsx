import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Flex, Box } from "reflexbox";
import { Header } from './components/Header';
import { Menu } from './components/MainNav';
import { AllCategories, CategoriesNav, Chinese, Indian, Japanese, Korean, Malaysian, Singaporean, Taiwanese, Thai, Vietnamese } from './components/Categories';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Details } from './components/Details';
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
              <CategoriesNav />
            </Box>
            <Box width={3 / 4}>
              <Switch>
                <Route exact path="/">
                  <Flex width={1}>
                    <Home />
                  </Flex>
                </Route>
                <Box>  
                  <Route path="/All">
                    <AllCategories />
                  </Route>
                  <Route path="/Chinese">
                    <Chinese />
                  </Route>
                  <Route path="/Indian">
                    <Indian />
                  </Route>
                  <Route path="/Japanese">
                    <Japanese />
                  </Route>
                  <Route path="/Korean">
                    <Korean />
                  </Route>
                  <Route path="/Malaysian">
                    <Malaysian />
                  </Route>
                  <Route path="/Singaporean">
                    <Singaporean />
                  </Route>
                  <Route path="/Taiwanese">
                    <Taiwanese />
                  </Route>
                  <Route path="/Thai">
                    <Thai />
                  </Route>
                  <Route path="/Vietnamese">
                    <Vietnamese />
                  </Route>
                  <Route path="/Details">
                    <Details />
                  </Route>
                </Box>
              </Switch>
            </Box>
          </Flex>
        </Box>
      </Flex> 
      <Footer />
    </Router>
  );
}

export default App;
