import React from 'react';
import styled from '@xstyled/styled-components';
import { useQuery } from "@apollo/client";
import { Flex, Box } from "reflexbox";
import { H2 } from "../../styles/text";
import { Card } from "../Card";
import Peas from "../../images/Peas.png";
// import { handleDetailsPath } from "../../shared/index";
import { handleReverseOrder } from "../../shared";
import { RECIPES } from "../../api/gql";

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
export interface AllCategoriesProps {

}

export const AllCategories: React.FC<AllCategoriesProps> = (AllCategoriesProps): JSX.Element => {
  const { loading, error, data } = useQuery(RECIPES);
  if(loading) return <p>Loading All Category Recipe...</p> 
  if(error) return <p>Error loading All Category Recipe!</p> 

  const title = "word of mouth";
  title.replace(" ", "_");
  console.log("rec", title);
  
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
              <H2>All Categories</H2>
            </Box>
          </Flex>
          <Flex justifyContent="flex-start" flexWrap="wrap">
            {handleReverseOrder(data).map(item => (
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
                  // detailPagePath={`/${handleDetailsPath(item.title)}`}
                  detailPagePath={`/Details/${item.title}`}
                  categoryPagePath={`/Category/${item.category}`}
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