import styled from "@xstyled/styled-components";

export const Grids = styled.div`

`;

export const Row = styled.div<{justifyContent: string, alignItems: string}>`
  display: flex;
  width: 100%;
  justify-content: ${(props) => props.justifyContent };
  align-items: ${(props) => props.alignItems};
`;

export const Col = styled.div<{size?: number, width?: string, maxWidth?: string}>`
  flex: ${(props) => props.size };
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
`;