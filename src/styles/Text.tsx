import styled, { css } from '@xstyled/styled-components';
import { th } from "@xstyled/system";
import { Link } from 'react-router-dom';

export const fontFamily = css`
  font-family: 'Montserrat', 'Helvetica', sans-serif;
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

export const H2 = styled.h2`
   ${fontFamily}
   font-size: ${th.fontSize(6)};
   margin-top: 14px;
`;

export const H3 = styled.h3`
   ${fontFamily}
   font-size: ${th.fontSize(4)};
   line-height: 140%;
   margin: 0;
`;

export const RecipeTitle = styled(H3)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const H4 = styled.h4`
   ${fontFamily}
   font-size: ${th.fontSize(3)};
   line-height: 140%;
   margin: 0;
`;
export const H5 = styled.h5`
   ${fontFamily}
   font-size: ${th.fontSize(2)};
   line-height: 140%;
   margin: 0;
`;

export const LinkStyle = styled(Link)<{color? : string}>`
  text-decoration: none;
  color: ${(props) => props.color};
`;

// Multiline ellipsis / fade out for 3 lines
export const Fade = styled.div`
  position: relative;
  height: calc(1.6 * 14px * 3);
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

LinkStyle.defaultProps = {
  color: "#4d4d4d"
}

