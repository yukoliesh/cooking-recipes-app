import styled from "@xstyled/styled-components";
import { th } from "@xstyled/system";
import { Box } from "reflexbox";
import { fontFamily } from "../../styles/Text";  
import { H4 } from "../../styles/Text"; 

export const CardCont = styled.div`
width: 30vw;
max-width: 485px;
border-radius: 15px;
filter: drop-shadow(0 4px 4px #a9a8a8);
background-color: #4d4d4d;
margin-right: ${th.space(2)};
margin-bottom: ${th.space(4)};
`;

export const CardImageCont = styled(Box)`
  width: 150px;
  height: 140px;
`;

export const CardImage = styled.img`
  width: 150px;
  height: 140px;
  object-fit: cover;
  border-radius: 15px 0 0 15px;
`;

export const CardInfoCategoryCont = styled(Box)`
  ${fontFamily}
  padding-right: ${th.space(2)};
  width: 6rem;
`;

export const CardInfoCont = styled(Box)`
  ${fontFamily}
  padding-right: ${th.space(2)};
  width: 5rem;
`;

export const MiniCardTitle = styled(H4)`
  color: #fff;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const CardInfoTitle = styled.div`
  padding-bottom: ${th.space(1)};
  color: #fff;
`;

export const CardInfoText = styled.p<{fontWeight? : string}>`
  margin: 0;
  ${fontFamily}
  font-size: ${th.fontSize(2)};
  line-height: ${th.lineHeight(2)};
  font-weight: ${(props) => props.fontWeight};
  color: #fff;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const MiniDivider = styled.div`
  height: 30px;
  margin: ${th.space(1)} ${th.space(3)};
  border-right: solid 1px #ccc;
`;


// export const CategoryBg = styled.div<{bgColor: string, color: string}>`
//   padding: 2px ${th.space(2)};
//   border-radius: 30px;
//   background-color: ${(props) => props.bgColor};
//   color: ${(props) => props.color};
//   text-align: center;
//   font-weight: bold;
//   margin-top: ${th.space(1)};
// `;
