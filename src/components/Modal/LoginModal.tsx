import React from 'react';
import { Flex, Box } from "reflexbox";
import CloseIcon from '@material-ui/icons/Close';
import { ModalWrapper, ModalBox, CloseButtonBox, CloseButton, ModalBoxHeaderTxt, ForgotTxtBox, SubmitButton, ForgotButton, ModalBoxHeaderDesc, ValidationText } from './modalStyles'; 
import { TextBox } from './TextBox';

export interface LoginModalProps {
  modalTitle: string;
  isModalOpen: boolean;
  isCreateAccount?: boolean;
  modalDesc?: string;
  onCloseClick: () => void;
  onSubmitClick: (e) => void;
  onTextBoxInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isInvalid: boolean;
  errorMessage: string;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  modalTitle,
  modalDesc,
  isModalOpen,
  isCreateAccount,
  onCloseClick,
  onSubmitClick,
  onTextBoxInputChange,
  isInvalid,
  errorMessage,
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
                  {isInvalid && (
                      <ValidationText aria-invalid={isInvalid} >{errorMessage}</ValidationText>
                  )}
                  <form>
                    <Flex flexDirection="column"> 
                      {isCreateAccount && (
                        <>
                          <Box mb={3}>
                            <TextBox htmlFor="firstName" textboxId="firstName" textboxLabel="First Name" textboxPlaceholder="First Name" textBoxType="text" onTextBoxInputChange={onTextBoxInputChange} />
                          </Box>
                          <Box mb={3}>
                            <TextBox htmlFor="lastName" textboxId="lastName" textboxLabel="Last Name" textboxPlaceholder="Last Name" textBoxType="text" onTextBoxInputChange={onTextBoxInputChange} />
                          </Box>
                        </>
                      )}
                      <Box mb={3}>
                        <TextBox htmlFor="email" textboxId="email" textboxLabel="Email" textboxPlaceholder="Email" textBoxType="text" onTextBoxInputChange={onTextBoxInputChange} />
                      </Box>
                      <Box mb={3}>
                        <TextBox htmlFor="password" textboxId="password" textboxLabel="Password" textboxPlaceholder="Password" textBoxType="password" onTextBoxInputChange={onTextBoxInputChange} />
                      </Box>
                      {isCreateAccount && (
                        <Box>
                          <TextBox htmlFor="confirmPassword" textboxId="confirmPassword" textboxLabel="Confirm Password" textBoxType="password" textboxPlaceholder="Confirm Password" onTextBoxInputChange={onTextBoxInputChange} />
                        </Box>
                      )}
                      {!isCreateAccount && (
                        <ForgotTxtBox mt={2} mb={5}>
                          <ForgotButton>Forgot your password?</ForgotButton>
                        </ForgotTxtBox>
                      )}
                      <Box mt={5}>
                        <SubmitButton size="large" label={modalTitle} primary onClick={e => onSubmitClick(e)} />
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
