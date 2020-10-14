import styled, { css } from '@xstyled/styled-components';
import {createGlobalStyle} from '@xstyled/styled-components';


// This can be used for css reset
export default createGlobalStyle`
  *{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400
  }
`;

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400
  }
  body{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const heading = css`
  font-family: 'Roboto Slab', serif;
`;


