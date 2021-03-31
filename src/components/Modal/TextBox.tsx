import React from 'react';
import { TextboxLabel, TextBoxInput } from './modalStyles';

export interface TextBoxProps {
  textboxLabel: string;
  textboxPlaceholder: string;
  textboxId: string;
  onTextBoxInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  htmlFor: string;
}

export const TextBox: React.FC<TextBoxProps> = ({
  textboxLabel,
  textboxPlaceholder,
  textboxId,
  onTextBoxInputChange,
  htmlFor
}: TextBoxProps): JSX.Element => {


  return (
    <>
      <TextboxLabel htmlFor={htmlFor}>{textboxLabel}</TextboxLabel>
      <TextBoxInput type="text" placeholder={textboxPlaceholder} aria-placeholder={textboxPlaceholder} id={textboxId} onChange={e => onTextBoxInputChange} />
    </>
  );
};
