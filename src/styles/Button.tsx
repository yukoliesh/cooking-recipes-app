import styled from "@xstyled/styled-components";
import { Link } from 'react-router-dom';


export const NavButton = styled(Link)<{bordercolor: string}>`
  width: 100%;
  padding: 0.8rem;
  /* margin-left: 0.8rem; */
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-left: solid 5px ${(props) => props.bordercolor };;
  border-right: none;
  border-top: none;
  border-bottom: none;
  cursor: pointer;
  background-color: #fff;
  filter: drop-shadow(0 4px 4px #a9a8a8);
  text-align: right;
  display: block;
  text-decoration: none;
  color: #4d4d4d;
`;