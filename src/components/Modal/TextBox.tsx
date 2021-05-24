import React from 'react';
import { TextboxLabel, TextBoxInput } from './modalStyles';

export interface TextBoxProps {
  textboxLabel: string;
  textboxPlaceholder: string;
  textboxId: string;
  onTextBoxInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  htmlFor: string;
  textBoxType: string;
}

export const TextBox: React.FC<TextBoxProps> = ({
  textboxLabel,
  textboxPlaceholder,
  textboxId,
  onTextBoxInputChange,
  htmlFor,
  textBoxType
}: TextBoxProps): JSX.Element => {


  return (
    <>
      <TextboxLabel htmlFor={htmlFor}>{textboxLabel}</TextboxLabel>
      <TextBoxInput type={textBoxType} placeholder={textboxPlaceholder} aria-placeholder={textboxPlaceholder} name={textboxId} id={textboxId} onChange={onTextBoxInputChange} />
    </>
  );
};
