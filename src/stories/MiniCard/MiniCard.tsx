import React from 'react';
import { Link } from 'react-router-dom';
import styled from "@xstyled/styled-components";
import { CardCont, CardImageCont, CardImage, CardInfoText, CardInfoCategoryCont, CardInfoCont, CardTitle, MiniDivider } from "../MiniCard";
import { Flex, Box } from "reflexbox";
// import { Box } from "../../styles/Grids"; 

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
  detailPagePath: string;
  categoryPagePath: string;
}

export const MiniCard: React.FC<MiniCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  categoryName,
  timeAmount,
  effortName,
  detailPagePath,
  categoryPagePath
}): JSX.Element => (
  <>
    <CardCont>
      <Flex justifyContent={{ md: 'flex-start' }} alignItems="flex-start">
        <ImageWrapper>
          <CardImageCont><Link to={detailPagePath}><CardImage src={imageUrl} alt={imageAlt} /></Link></CardImageCont>
        </ImageWrapper>
        <InfoWrapper flexDirection="column">
          <Box paddingTop={4} paddingBottom={0} >
            <Box><Link to={detailPagePath}><CardTitle>{title}</CardTitle></Link></Box>
          </Box>
          <Flex paddingBottom={2} paddingTop={4} alignItems="center">
            <CardInfoCategoryCont width={1 / 3}>
              <Box>
                <Link to={categoryPagePath}><CardInfoText fontWeight="bold">{categoryName}</CardInfoText></Link>
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
                <CardInfoText fontWeight="bold">{effortName}</CardInfoText>
              </Box>
            </CardInfoCont>
          </Flex>
        </InfoWrapper>
      </Flex>
    </CardCont>
  </>
);