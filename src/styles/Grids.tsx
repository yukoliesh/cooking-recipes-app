import styled from "@xstyled/styled-components";

export const Grids = styled.div`

`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Col = styled.div<{size: number}>`
  flex: ${(props) => props.size };
`;