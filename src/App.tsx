import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, useMutation, useQuery } from "@apollo/client";
import { RECIPES, ADD_USER, LOGIN_USER } from "./api/gql";
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
// import { useFormFields } from './shared/hooks/useFormFields';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    // Mock Data
    // uri: "http://localhost:4000/"

    // MongoDB
    uri: "http://localhost:4001/graphql"
  }),
  credentials: "same-origin"
})


function AppRouter() {
  // const history = useHistory();

  const [isOpenModal, setIsOpenModal] = React.useState(false); 
  const [isNewMember, setIsNewMember] = React.useState(false); 
  // const [isLoading, setIsLoading] = React.useState(false);
  const [signInInputValues, setSignInInputValues] = React.useState({
    email: "",
    password: ""
  });
  const [signInGqlVariables, setSignInGqlVariables] = React.useState<{email: string, password: string}>();
  const [signUpInputValues, setSignUpInputValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [isFavoriteClicked, setIsFavoriteClicked] = React.useState<boolean>(false);
  const [user, setUser] = React.useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [ signUp ] = useMutation(ADD_USER);

  const { loading: loadingRecipes, error: errorRecipes, data: dataRecipes } = useQuery(RECIPES);
  const { loading: loadingUser, error: errorUser, data: dataUser } = useQuery(LOGIN_USER, {
    variables: signInGqlVariables, 
    skip: typeof signInGqlVariables === "undefined"
  });

  // const getFirstName = React.useMemo(() => {
  //   const welcomeName = dataUser.logIn.user.firstName;
  //   return welcomeName;
  // },[dataUser]);


  console.log("data user" , dataUser);
  console.log("username" , username);
  console.log("password" , password);

  if(loadingRecipes) return <p>Loading App ...</p> 
  if(errorRecipes) return <p>Error loading App!</p>

  // It's better to pass data down to child components so then you don't have to re-render again
  const categoryNames: string[] = dataRecipes.recipes.map(x => x.category);
  const categorySet:string[] = [...new Set(categoryNames)];

  
  const onSignUpTextBoxInputChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    setSignUpInputValues({...signUpInputValues, [name]: value })
  } 

  const handleSignUpSubmitClick = (e) => {
    e.preventDefault();
    if(signUpInputValues.password === signUpInputValues.confirmPassword){
      signUp({ variables: signUpInputValues });
      console.log("clicked on submit button");
      setIsOpenModal(false);
    } else {
      console.log("Error! - Wrong Password");
    }
  }

  // React.useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if(loggedInUser){
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // },[]);

  // You need to separate the email and password to get their value by using .name.
  const onSignInTextBoxInputChange = (e) => {
    const { name, value } = e.target;
    setSignInInputValues({ ...signInInputValues, [name]: value });
  }
  
  const handleSignInSubmitClick = (e) => {
    e.preventDefault();
    // Check the email address is in database otherwise show the validation
    // Check the password is correct otherwise show the validation
    // Find out how to take care of Forgot password? part

    setSignInGqlVariables(signInInputValues);
    setIsOpenModal(false);
    setUser(dataUser);
    setIsUserLoggedIn(true);
    localStorage.setItem('user', dataUser);
    console.log("user", dataUser);
  }

  const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
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
            <Menu onLogin={onUserLoginClick} onCreateAccount={onCreateAccountClick} onLogout={handleLogout} userFirstName="yuko" isLoggedIn={isUserLoggedIn} />
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
          <LoginModal modalTitle="Create an Account" modalDesc="When you signed up, you can save your recipes!" onCloseClick={onModalClose} isModalOpen={isOpenModal} isCreateAccount={isNewMember} onTextBoxInputChange={onSignUpTextBoxInputChange} onSubmitClick={e => handleSignUpSubmitClick(e)} />
        ) : (
          <LoginModal modalTitle="SIGN IN" modalDesc="Welcome back!" onCloseClick={onModalClose} isModalOpen={isOpenModal} isCreateAccount={isNewMember} onTextBoxInputChange={onSignInTextBoxInputChange} onSubmitClick={e => handleSignInSubmitClick(e)} />
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
