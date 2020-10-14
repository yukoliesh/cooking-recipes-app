import styled, { css } from '@xstyled/styled-components';

const fontFamily = css`
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