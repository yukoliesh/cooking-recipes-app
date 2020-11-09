import React from 'react';
import { MainRecipes } from '../MainRecipes';
import { MiniRecipes } from '../MiniRecipes';

export interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({

}): JSX.Element => { 
  
  return (
    <>
      <MainRecipes />
      <MiniRecipes />
    </>
)};