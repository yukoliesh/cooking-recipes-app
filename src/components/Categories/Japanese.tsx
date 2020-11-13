import React from 'react';
import styled from '@xstyled/styled-components';
import { Flex, Box } from "reflexbox";
import { H2 } from "../../styles/text";
import { Card } from "../Card";
import Peas from "../../images/Peas.png";
import { recipes } from "../../data/MockData";
import { handleReverseOrder } from "../../shared";


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
export interface JapaneseProps {

}

export const Japanese: React.FC<JapaneseProps> = ({
}: JapaneseProps): JSX.Element => {
  const japaneseList = handleReverseOrder().filter(item => item.category === "Japanese");
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
              <H2>Japanese</H2>
            </Box>
          </Flex>
          <Flex justifyContent="flex-start" flexWrap="wrap">
            {japaneseList.map(item => (
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