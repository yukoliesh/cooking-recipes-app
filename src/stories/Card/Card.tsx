import React from 'react';
import styled from "@xstyled/styled-components";
import { th } from "@xstyled/system";
import { CardCont, CardImageCont, CardImage, CardInfoText, Desc, CategoryBg, CardInfoCategoryCont, CardInfoCont, CardInfoTitle } from "../../styles/CardStyle";
import { Box } from "../../styles/Grids"; 
import { H3, Fade } from "../../styles/Text"; 

const ImageWrapper = styled(Box)`
  width: 200px;
`;
const InfoWrapper = styled(Box)`
  width: calc(100% - 200px);
`;

export interface CardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  categoryName: string;
  timeAmount: string;
  effortName: string;
}

export const Card: React.FC<CardProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  categoryName,
  timeAmount,
  effortName
}): JSX.Element => (
  <>
    <CardCont>
      <Box justifyContent={{ md: 'flex-start' }} alignItems="flex-start">
        <ImageWrapper>
          <CardImageCont><CardImage src={imageUrl} alt={imageAlt} /></CardImageCont>
        </ImageWrapper>
        <InfoWrapper flexDirection="column">
          <Box padding={3}>
            <Box><H3>{title}</H3></Box>
          </Box>
          <Box padding={3}>
            <Box>
              <Fade>
                <Desc>{description}</Desc>
              </Fade>
            </Box>
          </Box>
          <Box padding={3}>
            <CardInfoCategoryCont flexDirection="column">
              <CardInfoTitle>Category</CardInfoTitle>
              <CategoryBg bgColor="#ff0000" color="#fff">
                <CardInfoText fontWeight="bold">{categoryName}</CardInfoText>
              </CategoryBg>
            </CardInfoCategoryCont>
            <CardInfoCont flexDirection="column">
              <CardInfoTitle>Time</CardInfoTitle>
              <Box>
                <CardInfoText fontWeight="bold">{timeAmount}</CardInfoText>
              </Box>
            </CardInfoCont>
            <CardInfoCont flexDirection="column">
              <CardInfoTitle>Effort</CardInfoTitle>
              <Box>
                <CardInfoText fontWeight="bold">{effortName}</CardInfoText>
              </Box>
            </CardInfoCont>
          </Box>
        </InfoWrapper>
      </Box>
    </CardCont>
  </>
);