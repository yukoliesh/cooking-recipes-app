import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from "@xstyled/system";
import { Flex, Box } from "reflexbox";
import { H3 } from "../../styles/Text"; 
import { StyledButton } from '../Button';
import Basil from "../../images/Basil.png"
import { recipes } from "../../data/MockData";

const RowWidth = styled(Box)`
  width: 50vw;
  max-width: 550px;
`;
const MainTitleImg = styled.img`
  width: 8rem;
`;
const imageBasil = {
  src: Basil,
  alt: '15 min Recipes'
}

const MoreButton = styled(StyledButton)`
  width: 50vw;
  max-width: 485px;
  padding: ${th.space(3)} ${th.space(4)} !important;
`;

export interface DetailsProps {

}

export const Details: React.FC<DetailsProps> = ({}: DetailsProps): JSX.Element => {

  return (
    <>
      hello
    </>
  )}