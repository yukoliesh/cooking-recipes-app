import React from 'react';
import { Link } from 'react-router-dom';
import styled from "@xstyled/styled-components";
import { LinkStyle } from "../../styles/Text"; 
import { CardCont, CardImageCont, CardImage, CardInfoText, CardInfoCategoryCont, CardInfoCont, MiniCardTitle, MiniDivider } from "./miniCardStyle";
import { Flex, Box } from "reflexbox";
import { getCategoryColor } from "../../shared";

const ImageWrapper = styled(Box)`
  width: 170px;
`;
const InfoWrapper = styled(Box)`
  width: calc(100% - 155px);
`;

export interface MiniCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  categoryName: string;
  timeAmount: string;
  effortLevel: string;
  detailPagePath: string;
  categoryPagePath: string;
}

export const MiniCard: React.FC<MiniCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  categoryName,
  timeAmount,
  effortLevel,
  detailPagePath,
  categoryPagePath
}): JSX.Element => (
  <>
    <CardCont>
      <Flex justifyContent={{ md: 'flex-start' }} alignItems="flex-start">
        <ImageWrapper>
          <CardImageCont>
            <Link to={detailPagePath}><CardImage src={imageUrl} alt={imageAlt} /></Link>
          </CardImageCont>
        </ImageWrapper>
        <InfoWrapper flexDirection="column">
          <Box paddingTop={4} paddingBottom={0} >
            <Box>
              <LinkStyle to={detailPagePath}> 
                <MiniCardTitle>
                  {title} 
                </MiniCardTitle>
              </LinkStyle>
            </Box>
          </Box>
          <Flex paddingBottom={2} paddingTop={4} alignItems="center">
            <CardInfoCategoryCont width={1 / 3}>
              <Box>
                <LinkStyle to={categoryPagePath} color={getCategoryColor(categoryName)}>
                  <CardInfoText fontWeight="bold">{categoryName}</CardInfoText>
                </LinkStyle>
              </Box>
            </CardInfoCategoryCont>
            <MiniDivider />
            <CardInfoCont width={1 / 3}>
              <Box>
                <CardInfoText fontWeight="bold">{timeAmount}</CardInfoText>
              </Box>
            </CardInfoCont>
            <MiniDivider />
            <CardInfoCont width={1 / 3}>
              <Box>
                <CardInfoText fontWeight="bold">{effortLevel}</CardInfoText>
              </Box>
            </CardInfoCont>
          </Flex>
        </InfoWrapper>
      </Flex>
    </CardCont>
  </>
);