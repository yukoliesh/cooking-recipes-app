import styled, { css } from '@xstyled/styled-components';
import { th } from "@xstyled/system";

export const fontFamily = css`
  font-family: 'Montserrat', sans-serif;
`;

export const Text = styled.p`
  ${fontFamily}
  font-size: 1rem;
  line-height: 1.5;
`;

export const MainHeader = styled.h2`
  ${fontFamily}
  line-height: 1.5;
`;

export const SideHeader = styled.h3`
  ${fontFamily}
  line-height: 1.5;
`;

export const NavButtonTxt = styled.div`
  ${fontFamily}
  line-height: 1;
  font-size: 1rem;
`;

export const fontfamily__body = "font-family: 'Montserrat', sans-serif";
export const fontfamily__heading = "font-family: 'Roboto Slab', serif";
export const lineheight__heading = "1.5";


export const h1 = styled.div`
  ${fontFamily}
  font-size: 48px;
  line-height: 1.5;
`;

export const H1 = styled.h1`
   ${fontFamily}
   font-size: ${th.fontSize(7)};
`;

export const H2 = styled.h3`
   ${fontFamily}
   font-size: ${th.fontSize(6)};
`;

export const H3 = styled.h3`
   ${fontFamily}
   font-size: ${th.fontSize(5)};
   line-height: 140%;
   margin: 0;
`;

// Multiline ellipsis / fade out for 3 lines
export const Fade = styled.div`
  position: relative;
  height: calc(1.5 * 16px * 3);
  overflow: hidden;
  &:after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 1.2em;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
  }
`;

