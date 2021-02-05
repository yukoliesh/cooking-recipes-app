import styled from "@xstyled/styled-components";
import { Flex, Box } from "reflexbox";
import { th } from "@xstyled/system";
// import CloseIcon from '@material-ui/icons/Close';
import { StyledButton } from '../Button';


export const ModalWrapper = styled(Flex)`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  position: fixed;
  overflow: auto;
  top: 0;
  bottom: 0;
  left: 0;
`;

export const ModalBox = styled(Flex)`
  max-height: 650px;
  background-color: #fff;
  border-radius: ${th.radius(15)};
  padding: ${th.space(4)};
`;

export const ModalBoxHeaderTxt = styled.div`
  font-size: ${th.fontSize(4)};
  font-weight: ${th.fontWeight(600)};
`;

export const ModalBoxHeaderDesc = styled.div`
  font-size: ${th.fontSize(2)};
  line-height: 1.5;
  padding-top: ${th.space(2)};
  margin-bottom: ${th.space(5)};
`;

export const CloseButtonBox = styled(Box)`
  height: 2rem;
  padding: ${th.space(2)};
  text-align: right;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  padding: ${th.space(2)};
  cursor: pointer;
`;

export const Form = styled.form`
  margin-top: ${th.space(2)};
`;

export const TextboxLabel = styled.label`
  display: none;
`;

export const TextBoxInput = styled.input`
  width: calc(100% - 48px);
  height: 1rem;
  padding: ${th.space(2)} ${th.space(4)};
  border: solid 1px #ccc;
  border-radius: ${th.radius(15)};
`;

export const ForgotTxtBox = styled(Box)`
  text-align: right;
`;

export const SubmitButton = styled(StyledButton)`
  width: 100%;
  border-radius: ${th.radius(35)} !important;
  padding: ${th.space(3)} ${th.space(4)} !important;
  font-weight: ${th.fontWeight(600)} !important;
`;

export const ForgotButton = styled.button`
  font-size: ${th.fontSize(2)};
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: ${th.radius(5)};
  padding: ${th.space(1)};
  color: #c79100;
  font-weight: ${th.fontWeight(600)}
`;