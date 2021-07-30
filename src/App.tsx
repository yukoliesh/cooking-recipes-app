import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, useMutation, useQuery, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { RECIPES, ADD_USER, LOGIN_USER, VALIDATE_TOKEN } from "./api/gql";
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
import { setInterval } from 'timers';
// import { useFormFields } from './shared/hooks/useFormFields';

type User = {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  role: string
}

const httpLink = createHttpLink({
  uri: "http://localhost:4001/graphql"
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  credentials: "same-origin"
})


function AppRouter() {
  const [isOpenModal, setIsOpenModal] = React.useState(false); 
  const [isNewMember, setIsNewMember] = React.useState(false); 
  // const [isLoading, setIsLoading] = React.useState(false);
  const [signInInputValues, setSignInInputValues] = React.useState({
    email: "",
    password: ""
  });
  const [signUpInputValues, setSignUpInputValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [isFavoriteClicked, setIsFavoriteClicked] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<User>();
  const [token, setToken] = React.useState<string>("");
  const [isInvalid, setIsInvalid] = React.useState<boolean>(false);
  const [errorMessageTxt, setErrorMessageTxt] = React.useState<string>("");
 

  const [ signUp ] = useMutation(ADD_USER);

  const { loading: loadingRecipes, error: errorRecipes, data: dataRecipes } = useQuery(RECIPES);
  const [ logIn ] = useMutation(LOGIN_USER);
  const [ validateToken ] = useMutation(VALIDATE_TOKEN);

  React.useEffect(() => {
    if(token){
      localStorage.setItem("token", token);
    }
  },[token]);

  React.useEffect(() => {
    const runValidation = async () => {
      const localToken = localStorage.getItem("token");
      if(localToken){
        console.log("token found", localToken);
        try{
          const userPayload = await validateToken();
          
          console.log("userPayload", userPayload);
          setUser(userPayload.data.validateToken.user);
          setToken(userPayload.data.validateToken.token);
        }
        catch(e){
          setToken("");
        }
      }
    }
    runValidation();
  },[]);

  if(loadingRecipes) return <p>Loading App ...</p> 
  if(errorRecipes) return <p>Error loading App!</p>

  // It's better to pass data down to child components so then you don't have to re-render again
  const categoryNames: string[] = dataRecipes.recipes.map(x => x.category);
  const categorySet:string[] = [...new Set(categoryNames)];

  
  const onSignUpTextBoxInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpInputValues({...signUpInputValues, [name]: value })
  } 

  const handleSignUpSubmitClick = async (e) => {
    e.preventDefault();

    if(signUpInputValues.password === signUpInputValues.confirmPassword){
      signUp({ variables: signUpInputValues });
      setIsOpenModal(false);
    } else {
      setErrorMessageTxt("Please make sure and enter the correct password.");
    }
    
    if(signUpInputValues.firstName.length === 0 || signUpInputValues.lastName.length === 0 || signUpInputValues.email.length === 0 || signUpInputValues.password.length === 0){
      setErrorMessageTxt("Please enter your information.");
      setIsInvalid(true);
      setIsOpenModal(true);
    }

    setIsInvalid(false);
    try{
      setIsOpenModal(false);
    }
    catch(e){
      console.error(e);
      setIsInvalid(true);
      setErrorMessageTxt("Please make sure and enter the correct information.");
    }
  }

  // You need to separate the email and password to get their value by using .name.
  const onSignInTextBoxInputChange = (e) => {
    const { name, value } = e.target;
    setSignInInputValues({ ...signInInputValues, [name]: value });
  }
  
  const handleSignInSubmitClick = async (e) => {
    e.preventDefault();

    if(signInInputValues.email.length === 0 || signInInputValues.password.length === 0){
      setIsInvalid(true);
      setIsOpenModal(true);
      setErrorMessageTxt("Please enter your information.");
      return ;
    }
    setIsInvalid(false);

    try{
      const userPayload = await logIn({variables: signInInputValues});
      
      console.log("userPayload", userPayload);
      setIsOpenModal(false);
      setUser(userPayload.data.logIn.user);
      setToken(userPayload.data.logIn.token);
    }
    catch(e){
      setIsInvalid(true);
      console.error(e);
      setErrorMessageTxt("Please make sure and enter the correct information.");
    }
  }

  const handleLogout = () => {
    setUser(undefined);
    localStorage.clear();
    setToken("");
  }

  // Favorite button action
  const handleAddFavoriteItem = (e) => {
    const checked = e.target.checked;
    setIsFavoriteClicked(true);
    console.log("fav", checked);
    console.log("you clicked it!");
  }

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



  // validation of confirm password
  // console.log("data from app", dataRecipes)
  console.log("signInInputValues", signInInputValues);
  // console.log("first Name", dataUser.user.firstName);
  // console.log("signUpInputValues", signUpInputValues);


  return (
    <Router>
      <Header />
        <Flex justifyContent="center">
          <Box width={3 / 4}>
            <Menu onLogin={onUserLoginClick} onCreateAccount={onCreateAccountClick} onLogout={handleLogout} userFirstName={user?.firstName || ""} isLoggedIn={token !== ""} />
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
                      <AllRecipes key="all-recipes" />
                    </Route>
                    <Route path="/AllCategories">
                      <AllCategories key="all-categories" />
                    </Route>
                    <Route path="/QuickRecipes">
                      <AllQuickRecipes key="all-quick-recipes" />
                    </Route>
                    <Route path="/Category/:categoryName">
                      <CategoryItem key="category-item"  />
                    </Route>
                    <Route path="/Details/:recipeName">
                      <DetailsPage onFavoriteButtonChange={e => handleAddFavoriteItem} isFavorite={isFavoriteClicked} recipeTitle="recipe" key={5} />
                    </Route>
                  </Box>
                </Switch>
              </Box>
            </Flex>
          </Box>
        </Flex> 
        {isNewMember ? (
          <LoginModal modalTitle="Create an Account" modalDesc="When you signed up, you can save your recipes!" onCloseClick={onModalClose} isModalOpen={isOpenModal} isCreateAccount={isNewMember} onTextBoxInputChange={onSignUpTextBoxInputChange} onSubmitClick={e => handleSignUpSubmitClick(e)} isInvalid={isInvalid} errorMessage={errorMessageTxt} />
        ) : (
          <LoginModal modalTitle="SIGN IN" modalDesc="Welcome back!" onCloseClick={onModalClose} isModalOpen={isOpenModal} isCreateAccount={isNewMember} onTextBoxInputChange={onSignInTextBoxInputChange} onSubmitClick={e => handleSignInSubmitClick(e)} isInvalid={isInvalid} errorMessage={errorMessageTxt} />
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
