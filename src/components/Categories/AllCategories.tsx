import React from 'react';
import { useQuery } from "@apollo/client";
import styled from '@xstyled/styled-components';
import { RECIPES } from "../../api/gql";
import { Flex, Box } from "reflexbox";
import { H2 } from "../../styles/text";
import { Card } from "../Card";
import Peas from "../../images/Peas.png";

const MainTitleImg = styled.img`
  width: 100%;
`;
const image = {
  src: Peas,
  alt: 'Categories'
}
const CroppedImg = styled.div`
  width: 4rem;
  overflow: hidden;
  margin: 0.75rem 0.5rem 0 0;
`;
export interface AllCategoriesProps {

}

export const AllCategories: React.FC<AllCategoriesProps> = (AllCategoriesProps): JSX.Element => {
  
  const { loading, error, data } = useQuery(RECIPES);
  if(loading) return <p>Loading AllCategoriesProps...</p> 
  if(error) return <p>Error loading AllCategoriesProps!</p>

  console.log('data from allC', data);
  console.log('data from allC', typeof data);

  const categoryNames: string[] = data.recipes.map(x => x.category);
  const categorySet:string[] = [...new Set(categoryNames)];

  
  console.log('categoryName', categorySet);

  
  return (
    <>
      <Flex id="all-categories">
        <Box>
          {categorySet.map(categoryName => (
            <>
              <Flex justifyContent="flex-start" key={categoryName}>
                <Box>
                  <CroppedImg>
                    <MainTitleImg src={image.src} alt={image.alt} />
                  </CroppedImg>
                </Box>
                <Box>
                  <H2>{categoryName}</H2>
                </Box>
              </Flex>
              <Flex justifyContent="flex-start" flexWrap="wrap"> 
              {data.recipes.filter(item => item.category === categoryName).map(item => (
                <Box>
                  <Card
                    key={item.id}
                    itemId={item.id}
                    title={item.title}
                    description={item.description}
                    categoryName={item.category}
                    timeAmount={`${item.totalTime} min`}
                    effortLevel={item.effort}
                    imageUrl={require(`../../images/${item.category}/${item.image}`)}
                    imageAlt={item.title}
                    detailPagePath={`/Details/${item.title}`}
                    categoryPagePath="/"
                    onSelectedRecipe={()=>{}}
                  />
                </Box>
                ))}
              </Flex>
            </>
          ))}
        </Box>
      </Flex>
    </>
  )};