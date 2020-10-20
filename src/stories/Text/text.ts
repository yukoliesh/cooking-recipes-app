import styled, { css } from '@xstyled/styled-components';
import { th } from "@xstyled/system";

const fontFamily = css`
  font-family: 'Montserrat', sans-serif;
`;

export const fontfamily__body = "font-family: 'Montserrat', sans-serif";
export const fontfamily__heading = "font-family: 'Roboto Slab', serif";
export const lineheight__heading = "1.5";


export const h1 = styled.div`
  ${fontFamily}
  font-size: 48px;
  line-height: 1.5;
`;

