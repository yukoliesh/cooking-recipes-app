import React from 'react';
import { Flex, Box } from "reflexbox";
import CloseIcon from '@material-ui/icons/Close';
import { ModalWrapper, ModalBox, CloseButtonBox, CloseButton, ModalBoxHeaderTxt, ForgotTxtBox, SubmitButton, ForgotButton, ModalBoxHeaderDesc } from './modalStyles'; 
import { TextBox } from './TextBox';



export interface ModalProps {
  modalTitle: string;
  isModalOpen: boolean;
  isCreateAccount?: boolean;
  modalDesc?: string;
  onCloseClick: () => void;
  onTextBoxInputChange: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  modalTitle,
  modalDesc,
  isModalOpen,
  isCreateAccount,
  onCloseClick,
  onTextBoxInputChange

}: ModalProps): JSX.Element => {

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
                            <TextBox textboxId="firtName" textboxLabel="First Name" textboxPlaceholder="First Name" onTextBoxInputChange={onTextBoxInputChange} />
                          </Box>
                          <Box mb={3}>
                            <TextBox textboxId="lastName" textboxLabel="Last Name" textboxPlaceholder="Last Name" onTextBoxInputChange={onTextBoxInputChange} />
                          </Box>
                        </>
                      )}
                      <Box mb={3}>
                        <TextBox textboxId="email" textboxLabel="Email" textboxPlaceholder="Email" onTextBoxInputChange={onTextBoxInputChange} />
                      </Box>
                      <Box>
                        <TextBox textboxId="password" textboxLabel="Password" textboxPlaceholder="Password" onTextBoxInputChange={onTextBoxInputChange} />
                      </Box>
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
