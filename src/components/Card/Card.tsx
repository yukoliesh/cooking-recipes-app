import React from 'react';
import styled from "@xstyled/styled-components";
import { th } from "@xstyled/system";
import { Link } from 'react-router-dom';
import { CardCont, CardImageCont, CardImage, CardInfoText, Desc, CardInfoCategoryCont, CardInfoCont, CardInfoTitle } from "./cardStyle";
import { Flex, Box } from "reflexbox";
import { RecipeTitle, Fade, LinkStyle } from "../../styles/Text"; 
import { Difficulty } from "../MainRecipes/Difficulty"; 
import { getCategoryColor } from "../../shared";

const ImageWrapper = styled(Box)`
  width: 200px;
`;
const InfoWrapper = styled(Flex)`
  width: calc(100% - 200px);
  padding: ${th.space(3)} ${th.space(2)};
`;

export interface CardProps {
  imageUrl: string;
  imageAlt: string;
  itemId: string;
  title: string;
  description: string;
  categoryName: string;
  effortLevel: string;
  timeAmount: string;
  detailPagePath: string;
  categoryPagePath: string;
  onRecipeClicked: (e: any) => void;
}

export const Card: React.FC<CardProps> = ({
  imageUrl,
  imageAlt,
  itemId,
  title,
  description,
  categoryName,
  effortLevel,
  timeAmount,
  detailPagePath,
  categoryPagePath,
  onRecipeClicked
}): JSX.Element => {

  return (
  <>
    <CardCont id={itemId}>
      <Flex justifyContent={{ md: 'flex-start' }} alignItems="flex-start">
        <ImageWrapper>
          <CardImageCont><Link to={detailPagePath} onClick={onRecipeClicked}><CardImage src={imageUrl} alt={imageAlt} /></Link></CardImageCont>
        </ImageWrapper>
        <InfoWrapper flexDirection="column" alignContent="space-around">
          <Box padding={3}>
            <Box>
              <LinkStyle to={detailPagePath} onClick={onRecipeClicked}><RecipeTitle>{title}</RecipeTitle></LinkStyle>
            </Box>
          </Box>
          <Box padding={3}>
            <Box>
              <Fade>
                <Desc>{description}</Desc>
              </Fade>
            </Box>
          </Box>
          <Flex padding={3} justifyContent="flex-start" alignItems="center" flexDirection="column">
            <Box width={1}>
              <CardInfoCategoryCont alignItems="center" width={1}>
                <Box width={1 / 3}>
                  <CardInfoTitle>Category</CardInfoTitle>
                </Box>
                <Box>
                  <LinkStyle to={categoryPagePath} color={getCategoryColor(categoryName)}>
                    <CardInfoText fontWeight="bold">{categoryName}</CardInfoText>
                  </LinkStyle>
                </Box>
              </CardInfoCategoryCont>
              <CardInfoCont alignItems="center" width={1}>
                <Box width={1 / 3}>
                  <CardInfoTitle>Time</CardInfoTitle>
                </Box>
                <Box>
                  <CardInfoText fontWeight="bold">{timeAmount}</CardInfoText>
                </Box>
              </CardInfoCont>
              <CardInfoCont alignItems="center" width={1}>
                <Box width={1 / 3}>
                  <CardInfoTitle>Difficulty</CardInfoTitle>
                </Box>
                <Box width={2 / 3}>
                  <Difficulty level={effortLevel} />
                </Box>
              </CardInfoCont>
            </Box>
          </Flex>
        </InfoWrapper>
      </Flex>
    </CardCont>
  </>
)};