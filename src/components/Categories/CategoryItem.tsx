import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import styled from '@xstyled/styled-components';
import { RECIPES_BY_CATEGORY } from "../../api/gql";
import { Flex, Box } from "reflexbox";
import { H2 } from "../../styles/text";
import { Card } from "../Card";
import Peas from "../../images/Peas.png";
// import { handleReverseOrder } from "../../shared";


const MainTitleImg = styled.img`
  width: 8rem;
`;
const image = {
  src: Peas,
  alt: 'Categories'
}
const CroppedImg = styled.div`
  width: 7rem;
  overflow: hidden;
  margin: -20px 0 0 -35px;
`;
export interface CategoryItemProps {

}

export const CategoryItem: React.FC<CategoryItemProps> = (CategoryItemProps): JSX.Element => {
  //@ts-ignore
  let { categoryName } = useParams();
  const { loading, error, data } = useQuery(RECIPES_BY_CATEGORY, {
    variables: { category: categoryName }
  });

  if(loading) return <p>Loading CategoryItem Recipe...</p> 
  if(error) return <p>Error loading CategoryItem Recipe!</p>

  return (
    <>
    <Flex>
        <Box>
          <Flex justifyContent="flex-start">
            <Box>
              <CroppedImg>
                <MainTitleImg src={image.src} alt={image.alt} />
              </CroppedImg>
            </Box>
            <Box>
              <H2>{data.recipesByCategory[0].category}</H2>
            </Box>
          </Flex>
          <Flex justifyContent="flex-start" flexWrap="wrap">
            {
              data.recipesByCategory.map(item => (
                <Box key={item.id}>
                  <Card
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
              ))
            }
          </Flex>
        </Box>
      </Flex>
    </>
  )};