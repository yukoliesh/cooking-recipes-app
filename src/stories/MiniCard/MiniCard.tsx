import React from 'react';
import styled from "@xstyled/styled-components";
import { CardCont, CardImageCont, CardImage, CardInfoText, CategoryBg, CardInfoCategoryCont, CardInfoCont, CardInfoTitle, CardTitle } from "../MiniCard";
import { Box } from "../../styles/Grids"; 

const ImageWrapper = styled(Box)`
  width: 170px;
`;
const InfoWrapper = styled(Box)`
  width: calc(100% - 200px);
`;

export interface MiniCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  categoryName: string;
  timeAmount: string;
  effortName: string;
}

export const MiniCard: React.FC<MiniCardProps> = ({
  imageUrl,
  imageAlt,
  title,
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
          <Box paddingTop={4} paddingBottom={0} >
            <Box><CardTitle>{title}</CardTitle></Box>
          </Box>
          <Box paddingBottom={4} paddingTop={4}>
            <CardInfoCategoryCont flexDirection="column">
              <CategoryBg bgColor="#ff0000" color="#fff">
                <CardInfoText fontWeight="bold">{categoryName}</CardInfoText>
              </CategoryBg>
            </CardInfoCategoryCont>
            <CardInfoCont flexDirection="column">
              <Box>
                <CardInfoText fontWeight="bold">{timeAmount}</CardInfoText>
              </Box>
            </CardInfoCont>
            <CardInfoCont flexDirection="column">
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