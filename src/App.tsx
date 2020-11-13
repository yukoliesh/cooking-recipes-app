import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Flex, Box } from "reflexbox";
import { Header } from './components/Header';
import { Menu } from './components/MainNav';
import { AllCategories, CategoriesNav, Chinese, Indian, Japanese, Korean, Malaysian, Singaporean, Taiwanese, Thai, Vietnamese } from './components/Categories';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Details } from './components/Details';
import { Modal } from './components/Modal';
import './App.css';
import { AllQuickRecipes } from './components/MiniRecipes';

function App() {

  const [isOpenModal, setIsOpenModal] = React.useState(false); 
  const [isNewMember, setIsNewMember] = React.useState(false); 

  const onUserLoginClick = () => {
    setIsOpenModal(true);
    setIsNewMember(false);
  }
  const onCreateAccountClick = () => {
    setIsOpenModal(true);
    setIsNewMember(true);
  }
  const onModalClose = () => {
    setIsOpenModal(false);
  }


  return (
    <Router>
      <Header />
      <Flex justifyContent="center">
        <Box width={3 / 4}>
          <Menu onLogin={onUserLoginClick} onCreateAccount={onCreateAccountClick} onLogout={() => {}}/>
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
                  <Route path="/QuickRecipes">
                    <AllQuickRecipes />
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
      {isNewMember ? (
        <Modal modalTitle="Create an Account" modalDesc="When you signed up, you can save your recipes!" onCloseClick={onModalClose} isModalOpen={isOpenModal} isCreateAccount={isNewMember} onTextBoxInputChange={() => {}} />
      ) : (
        <Modal modalTitle="SIGN IN" modalDesc="Welcome back, Nash!" onCloseClick={onModalClose} isModalOpen={isOpenModal} isCreateAccount={isNewMember} onTextBoxInputChange={() => {}} />
      )}
      
      
      <Footer onCreateAccount={onCreateAccountClick} onLogin={onUserLoginClick} />
    </Router>
  );
}

export default App;
