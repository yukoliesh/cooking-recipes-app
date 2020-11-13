import styled from "@xstyled/styled-components";
import { Flex, Box } from "reflexbox";
import { th } from "@xstyled/system";


export const DetailsImage = styled.img`
  width: 100%;
  max-width: 785px;
  object-fit: cover;
`;

export const InfoTxt = styled.span`
  font-weight: ${th.fontWeight(600)};
`;

export const IngredientsList = styled.ul`
  padding-left: ${th.space(2)};
`;

export const IngredientsListItem = styled.li`
  line-height: 2;
`;

