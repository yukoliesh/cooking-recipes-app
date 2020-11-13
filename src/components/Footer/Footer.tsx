import React from 'react';
import styled, { css } from "@xstyled/styled-components";
import { th } from "@xstyled/system";
import { Link } from 'react-router-dom';
import { Flex, Box } from "reflexbox";

const FooterWrapper = styled(Flex)`
  background-color: #4c4c4c;
  color: #fff;
  padding: ${th.space(32)};
  margin-top: ${th.space(4)} !important;
  height: 15%;
`;

const LinkStyle = styled(Link)`
  color: #fff;
  padding-right: ${th.space(4)};
  text-decoration: none;
`;

const Credit = css`
  text-align: right;
  line-height: 2.5;
`;

const CreditTitle = styled(Box)`
  ${Credit}
  font-size: ${th.fontSize(16)};
  padding-right: ${th.space(2)};
`;

const CreditName = styled(Box)`
  ${Credit}
  color: #FFC700;
  font-size: ${th.fontSize(18)};
  letter-spacing: ${th.letterSpacing(12)};
`;


export interface FooterProps {
  onLogin: () => void;
  onCreateAccount: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onLogin,
  onCreateAccount
}): JSX.Element => (
    <FooterWrapper justifyContent="flex-start">
      <Box width={3 / 4}>
        <LinkStyle to="/All">RECEIPES</LinkStyle>
        <LinkStyle to="/">FAVORITES</LinkStyle>
        <LinkStyle to="/" onClick={onLogin}>SIGN IN</LinkStyle>
        <LinkStyle to="/" onClick={onCreateAccount}>SIGN UP</LinkStyle>
      </Box>
      <Box width={1 / 4}>
        <Flex flexDirection="column" justifyContent="flex-end">
          <CreditTitle>
            Designed, and Built by 
          </CreditTitle>
          <CreditName>
            YUKO SHIOZAKI
          </CreditName>
          <CreditTitle>
            copyright 2020
          </CreditTitle>
        </Flex>
        
      </Box>

    </FooterWrapper>
);