import styled from "@xstyled/styled-components";
// import { Flex, Box } from "reflexbox";
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
  padding-left: ${th.space(5)};
`;

export const IngredientsListItem = styled.li`
  line-height: ${th.lineHeight(2)};
`;

// const CounterStyle = css`
//   counter-reset: ${my-awesome-counter};
// `;

export const StepList = styled.ol`
  padding-left: ${th.space(5)};
  counter-reset: step-list;
  list-style: none;
`;

export const StepListItem = styled.li`
  line-height: ${th.lineHeight(2)};
  border: solid 1px #ccc;
  border-radius: ${th.radius(10)};
  margin-bottom: ${th.space(4)};
  padding: ${th.space(2)};
  counter-increment: step-list;
  position: relative;
  &::before{
    counter-increment: step-counter;
    content: counter(step-list);
    color: #fff;
    font-size: ${th.fontSize(2)};
    font-weight: ${th.fontWeight(600)};
    position: absolute;
    --size: 32px;
    left: calc(-1 *var(--size) - 10px);
    line-height: var(--size);
    width: var(--size);
    height: var(--size);
    top: 0;
    background: #808e95;
    border-radius: 50%;
    text-align: center;
  }
`;