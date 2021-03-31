import React from 'react';
import { Flex, Box } from "reflexbox";
import CloseIcon from '@material-ui/icons/Close';
import { ModalWrapper, ModalBox, CloseButtonBox, CloseButton, ModalBoxHeaderTxt, ForgotTxtBox, SubmitButton, ForgotButton, ModalBoxHeaderDesc } from './modalStyles'; 
import { TextBox } from './TextBox';



export interface LoginModalProps {
  modalTitle: string;
  isModalOpen: boolean;
  isCreateAccount?: boolean;
  modalDesc?: string;
  onCloseClick: () => void;
  onTextBoxInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  modalTitle,
  modalDesc,
  isModalOpen,
  isCreateAccount,
  onCloseClick,
  onTextBoxInputChange

}: LoginModalProps): JSX.Element => {

  return (
    <>
      {isModalOpen && (
        <ModalWrapper width={1} justifyContent="center" alignItems="center">
          <Box width={1 / 3}>
            <ModalBox alignItems="center" flexDirection="column" pt={4} pb={5}>
              <Flex width={1} justifyContent="flex-end">
                <CloseButtonBox width={1 / 4}>
                  <CloseButton onClick={onCloseClick}><CloseIcon /></CloseButton>
                </CloseButtonBox>
              </Flex>
              <Flex justifyContent="flex-start" alignItems="center" width={2 / 3} mt={4}>
                <Box width={1}>
                  <ModalBoxHeaderTxt>{modalTitle}</ModalBoxHeaderTxt>
                  <ModalBoxHeaderDesc>{modalDesc}</ModalBoxHeaderDesc>
                  <form>
                    <Flex flexDirection="column"> 
                      {isCreateAccount && (
                        <>
                          <Box mb={3}>
                            <TextBox htmlFor="firtName" textboxId="firtName" textboxLabel="First Name" textboxPlaceholder="First Name" onTextBoxInputChange={e => onTextBoxInputChange(e)} />
                          </Box>
                          <Box mb={3}>
                            <TextBox htmlFor="lastName" textboxId="lastName" textboxLabel="Last Name" textboxPlaceholder="Last Name" onTextBoxInputChange={e => onTextBoxInputChange(e)} />
                          </Box>
                        </>
                      )}
                      <Box mb={3}>
                        <TextBox htmlFor="email" textboxId="email" textboxLabel="Email" textboxPlaceholder="Email" onTextBoxInputChange={e => onTextBoxInputChange(e)} />
                      </Box>
                      <Box mb={3}>
                        <TextBox htmlFor="password" textboxId="password" textboxLabel="Password" textboxPlaceholder="Password" onTextBoxInputChange={e => onTextBoxInputChange(e)} />
                      </Box>
                      {isCreateAccount && (
                        <Box>
                          <TextBox htmlFor="confirmPassword" textboxId="confirmPassword" textboxLabel="Confirm Password" textboxPlaceholder="Confirm Password" onTextBoxInputChange={e => onTextBoxInputChange(e)} />
                        </Box>
                      )}
                      {!isCreateAccount && (
                        <ForgotTxtBox mt={2} mb={5}>
                          <ForgotButton>Forgot your password?</ForgotButton>
                        </ForgotTxtBox>
                      )}
                      <Box mt={5}>
                        <SubmitButton size="large" label={modalTitle} primary />
                      </Box>
                    </Flex>
                  </form>
                </Box>
              </Flex>
            </ModalBox>
          </Box>
        </ModalWrapper>
      )}
    </>
  )
}
