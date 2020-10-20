import styled from "@xstyled/styled-components";
import { th } from "@xstyled/system";
import { fontFamily } from "../../styles/Text"; 
import { Col, Box } from "../../styles/Grids"; 

export const CardCont = styled.div`
width: 30vw;
max-width: 485px;
border-radius: 15px;
filter: drop-shadow(0 4px 4px #a9a8a8);
background-color: #fff;
margin-right: ${th.space(2)};
margin-bottom: ${th.space(4)};
`;

export const CardImageCont = styled(Col)`
  width: 200px;
  height: 300px;
`;

export const CardImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 15px 0 0 15px;
`;

export const Desc = styled.p`
  ${fontFamily}
  font-size: ${th.fontSize(3)};
  margin: 0;
  line-height: ${th.lineHeight(1.5)};
`;

export const CardInfoCategoryCont = styled(Box)`
  ${fontFamily}
  padding-right: ${th.space(2)};
  width: 8rem;
`;

export const CardInfoCont = styled(Box)`
  ${fontFamily}
  padding-right: ${th.space(2)};
  width: 5rem;
`;

export const CardInfoTitle = styled.div`
  padding-bottom: ${th.space(1)};
`;

export const CardInfoText = styled.p<{fontWeight? : string}>`
  margin: 0;
  ${fontFamily}
  font-size: ${th.fontSize(2)};
  line-height: ${th.lineHeight(2)};
  font-weight: ${(props) => props.fontWeight};
`;

export const CategoryBg = styled.div<{bgColor: string, color: string}>`
  padding: 2px ${th.space(2)};
  border-radius: 30px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  text-align: center;
  font-weight: bold;
  margin-top: ${th.space(1)};
`;
