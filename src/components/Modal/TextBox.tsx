import React from 'react';
import { TextboxLabel, TextBoxInput } from './modalStyles';

export interface TextBoxProps {
  textboxLabel: string;
  textboxPlaceholder: string;
  textboxId: string;
  onTextBoxInputChange: () => void;
}

export const TextBox: React.FC<TextBoxProps> = ({
  textboxLabel,
  textboxPlaceholder,
  textboxId,
  onTextBoxInputChange
}: TextBoxProps): JSX.Element => {


  return (
    <>
      <TextboxLabel htmlFor="email">{textboxLabel}</TextboxLabel>
      <TextBoxInput type="text" placeholder={textboxPlaceholder} aria-placeholder={textboxPlaceholder} id={textboxId} onChange={onTextBoxInputChange} />
    </>
  );
};
