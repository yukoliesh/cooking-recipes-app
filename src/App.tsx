import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import { Flex, Box } from "reflexbox";
import { Header } from './components/Header';
import { Menu } from './components/MainNav';
import { AllCategories, CategoriesNav, Chinese, Indian, Japanese, Korean, Malaysian, Singaporean, Taiwanese, Thai, Vietnamese } from './components/Categories';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { DetailsPage } from './components/Details';
import { Modal } from './components/Modal';
import './App.css';
import { AllQuickRecipes } from './components/MiniRecipes';
import { recipes } from './data/MockData';

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
  //@ts-ignore
  // let { recipeName } = useParams();
  // const details = recipes.filter(item => item.title === `${recipeName}`);
  // console.log("detail", details);

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
                  <Route path="/AllRecipes">
                    <AllCategories />
                  </Route>
                  <Route path="/QuickRecipes">
                    <AllQuickRecipes />
                  </Route>
                  <Route path="/Category/Chinese">
                    <Chinese />
                  </Route>
                  <Route path="/Category/Indian">
                    <Indian />
                  </Route>
                  <Route path="/Category/Japanese">
                    <Japanese />
                  </Route>
                  <Route path="/Category/Korean">
                    <Korean />
                  </Route>
                  <Route path="/Category/Malaysian">
                    <Malaysian />
                  </Route>
                  <Route path="/Category/Singaporean">
                    <Singaporean />
                  </Route>
                  <Route path="/Category/Taiwanese">
                    <Taiwanese />
                  </Route>
                  <Route path="/Category/Thai">
                    <Thai />
                  </Route>
                  <Route path="/Category/Vietnamese">
                    <Vietnamese />
                  </Route>
                  <Route path="/Details/:recipeName">
                    <DetailsPage  />
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
