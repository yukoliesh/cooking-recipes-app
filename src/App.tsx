import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, useQuery } from "@apollo/client";
import { RECIPES } from "./api/gql";
import { Flex, Box } from "reflexbox";
import { Header } from './components/Header';
import { Menu } from './components/MainNav';
import { AllCategories, CategoriesNav } from './components/Categories';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { DetailsPage } from './components/Details';
import { LoginModal } from './components/Modal';
import './App.css';
import { AllQuickRecipes } from './components/MiniRecipes';
import { CategoryItem } from './components/Categories/CategoryItem';
import { AllRecipes } from './components/AllRecipes/AllRecipes';
import { useFormFields } from './shared/hooks/useFormFields';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    // Mock Data
    uri: "http://localhost:4000/"

    // MongoDB
    // uri: "http://localhost:4001/graphql"
  }),
  credentials: "same-origin"
})


function AppRouter() {
  // const history = useHistory();

  const [isOpenModal, setIsOpenModal] = React.useState(false); 
  const [isNewMember, setIsNewMember] = React.useState(false); 
  const [isLoading, setIsLoading] = React.useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

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

  const { loading, error, data } = useQuery(RECIPES);
  if(loading) return <p>Loading App ...</p> 
  if(error) return <p>Error loading App!</p>

  // It's better to pass data down to child components so then you don't have to re-render again
  const categoryNames: string[] = data.recipes.map(x => x.category);
  const categorySet:string[] = [...new Set(categoryNames)];

  // Sign In - Sign Up modal
  // const validateForm = () => {
  //   return fields.email.length > 0 && fields.passward.length > 0 ;
  // }
  // const onTextBoxInputChange = (e) => {
  //   const textTargetInput = e.target.value;
  //   console.log("input", textTargetInput, e.target.value);
    // setSignInValues{
    //   'email' = textTargetInput,
    //   'password' = textTargetInput
    // }
  // }

  console.log("data from app", data)

  return (
    <Router>
      <Header />
        <Flex justifyContent="center">
          <Box width={3 / 4}>
            <Menu onLogin={onUserLoginClick} onCreateAccount={onCreateAccountClick} onLogout={() => {}}/>
            <Flex justifyContent="flex-start" alignItems="flex-start">
              <Box width={1 / 4}>
                <CategoriesNav categoryNames={categorySet} />
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
                      <AllRecipes />
                    </Route>
                    <Route path="/AllCategories">
                      <AllCategories />
                    </Route>
                    <Route path="/QuickRecipes">
                      <AllQuickRecipes />
                    </Route>
                    <Route path="/Category/:categoryName">
                      <CategoryItem  />
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
          <LoginModal modalTitle="Create an Account" modalDesc="When you signed up, you can save your recipes!" onCloseClick={onModalClose} isModalOpen={isOpenModal} isCreateAccount={isNewMember} onTextBoxInputChange={() => {}} />
        ) : (
          <LoginModal modalTitle="SIGN IN" modalDesc="Welcome back!" onCloseClick={onModalClose} isModalOpen={isOpenModal} isCreateAccount={isNewMember} onTextBoxInputChange={() => {}} />
        )}
      <Footer onCreateAccount={onCreateAccountClick} onLogin={onUserLoginClick} />
    </Router>
  )
}


function App() {

  
  //@ts-ignore
  // let { recipeName } = useParams();
  // const details = recipes.filter(item => item.title === `${recipeName}`);
  // console.log("detail", details);

  return (
    <ApolloProvider client = {client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
