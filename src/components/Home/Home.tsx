import React from 'react';
import { useHistory } from "react-router-dom";
import { MainRecipes } from '../MainRecipes';
import { MiniRecipes } from '../MiniRecipes';

export interface HomeProps {

}

export const Home: React.FC<HomeProps> = (HomeProps): JSX.Element => { 
  const history = useHistory();
  const routeChange = () => {
    let path = `All`;
    history.push(path);
  }
  const routeQuickChange = () => {
    let path = `QuickRecipes`;
    history.push(path);
  }
  return (
    <>
      <MainRecipes onMoreRecipesClick={routeChange} />
      <MiniRecipes onMoreRecipesClick={routeQuickChange} />
    </>
)};