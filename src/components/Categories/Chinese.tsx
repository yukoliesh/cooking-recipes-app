import React from 'react';
import styled from '@xstyled/styled-components';
import { Flex, Box } from "reflexbox";
import { H2 } from "../../styles/Text";
import { Card } from "../Card";
import Peas from "../../images/Peas.png";
import { recipes } from "../../data/MockData";


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
export interface ChineseProps {

}

export const Chinese: React.FC<ChineseProps> = ({
}: ChineseProps): JSX.Element => {
  const chineseList = recipes.filter(item => item.category === "Chinese");
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
              <H2>Chinese</H2>
            </Box>
          </Flex>
          <Flex justifyContent="flex-start" flexWrap="wrap">
            {chineseList.map(item => (
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
                  detailPagePath="/"
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