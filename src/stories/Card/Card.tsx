import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "@xstyled/styled-components";
import { Link } from 'react-router-dom';
import { CardCont, CardImageCont, CardImage, CardInfoText, Desc, CardInfoCategoryCont, CardInfoCont, CardInfoTitle, Divider } from "./CardStyle";
import { Flex, Box } from "reflexbox";
import { H3, Fade } from "../../styles/text"; 

const ImageWrapper = styled(Box)`
  width: 200px;
`;
const InfoWrapper = styled(Flex)`
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
  detailPagePath: string;
  categoryPagePath: string;
}

export const Card: React.FC<CardProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  categoryName,
  timeAmount,
  effortName,
  detailPagePath,
  categoryPagePath
}): JSX.Element => (
  <>
    <Router>
      <CardCont>
        <Flex justifyContent={{ md: 'flex-start' }} alignItems="flex-start">
          <ImageWrapper>
            <CardImageCont><Link to={detailPagePath}><CardImage src={imageUrl} alt={imageAlt} /></Link></CardImageCont>
          </ImageWrapper>
          <InfoWrapper flexDirection="column">
            <Box padding={3}>
              <Box><Link to={detailPagePath}><H3>{title}</H3></Link></Box>
            </Box>
            <Box padding={3}>
              <Box>
                <Fade>
                  <Desc>{description}</Desc>
                </Fade>
              </Box>
            </Box>
            <Flex padding={3} alignItems="center">
              <CardInfoCategoryCont flexDirection="column">
                <CardInfoTitle>Category</CardInfoTitle>
                <Box>
                  <Link to={categoryPagePath}><CardInfoText fontWeight="bold">{categoryName}</CardInfoText></Link>
                </Box>
              </CardInfoCategoryCont>
              <Divider />
              <CardInfoCont flexDirection="column">
                <CardInfoTitle>Time</CardInfoTitle>
                <Box>
                  <CardInfoText fontWeight="bold">{timeAmount}</CardInfoText>
                </Box>
              </CardInfoCont>
              <Divider />
              <CardInfoCont flexDirection="column">
                <CardInfoTitle>Effort</CardInfoTitle>
                <Box>
                  <CardInfoText fontWeight="bold">{effortName}</CardInfoText>
                </Box>
              </CardInfoCont>
            </Flex>
          </InfoWrapper>
        </Flex>
      </CardCont>
    </Router>
  </>
);