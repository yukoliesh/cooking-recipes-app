import React from 'react';
import styled from '@xstyled/styled-components';
import { Flex, Box } from "reflexbox";
import { H2 } from "../../styles/Text";
import { Card } from "../Card";
import Peas from "../../images/Peas.png";
import { recipes } from "../../data/MockData";
import { handleDetailsPath } from "../../shared/index";


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

export const AllCategories: React.FC<AllCategoriesProps> = ({
}: AllCategoriesProps): JSX.Element => {
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
            {recipes.map(item => (
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
                  detailPagePath="/Details"
                  categoryPagePath={`/${item.category}`}
                  onRecipeClicked={()=>{}}
                />
              </Box>
            ))
            }
          </Flex>
        </Box>
      </Flex>
    </>
  )};