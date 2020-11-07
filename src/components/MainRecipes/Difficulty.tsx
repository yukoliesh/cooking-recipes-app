import React from 'react';
import styled from "@xstyled/styled-components";
import { th } from "@xstyled/system";
import { Flex, Box } from "reflexbox";

const ProgressBarItem = styled.div<{color: string}>`
  border: solid ${(props) => props.color} 1px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  width: 100%;
  height: 5px;
  margin-right: ${th.space(1)};
`;

export interface DifficultyProps {
  level: string;
}

export const Difficulty: React.FC<DifficultyProps> = ({
  level
}): JSX.Element => {
  return (
  <>
    {level === "Easy" && (
      <Flex width={1}>
        <Box width={1 / 3} mr={1}>
          <ProgressBarItem color="#ffc107" />
        </Box>
        <Box width={1 / 3} mr={1}>
          <ProgressBarItem color="#b0bec5" />
        </Box>
        <Box width={1 / 3}>
          <ProgressBarItem color="#b0bec5" />
        </Box>
      </Flex>
    )}
    {level === "Moderate" && (
      <Flex width={1}>
        <Box width={1 / 3} mr={1}>
          <ProgressBarItem color="#ffc107" />
        </Box>
        <Box width={1 / 3} mr={1}>
          <ProgressBarItem color="#ffc107" />
        </Box>
        <Box width={1 / 3}>
          <ProgressBarItem color="#b0bec5" />
        </Box>
      </Flex>
    )}
    {level === "Advance" && (
      <Flex width={1}>
        <Box width={1 / 3} mr={1}>
        <ProgressBarItem color="#ffc107" />
      </Box>
      <Box width={1 / 3} mr={1}>
        <ProgressBarItem color="#ffc107" />
      </Box>
      <Box width={1 / 3}>
        <ProgressBarItem color="#ffc107" />
      </Box>
      </Flex>
    )}
  </>
)};