import React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { variant } from '@xstyled/system';
import { fontfamily__body, fontfamily__heading, lineheight__heading } from './text';

const fontStyleVariants = variant ({
  default: "normal",
  prop: "fontStyle",
  variants: {
    normal: css`
      font-style: normal;
    `,
    italic: css`
      font-style: italic;
    `
  }
});

const fontWeightVariants = variant({
  default: "normal",
  prop: "fontWeight",
  variants: {
    normal: css`
      font-weight: normal;
    `,
    semiBold: css`
      font-weight: semiBold;
    `
  }
});

const typeVariants = variant({
  default: "bodyMedium",
  prop: "variant",
  variants: {
    bodyLarge: css`
      font-family: ${fontfamily__body};
      font-size: 3;
      line-height: text;
    `,
    bodyMedium: css`
      font-family: ${fontfamily__body};
      font-size: 2;
      line-height: text;
    `,
    bodySmall: css`
      font-family: ${fontfamily__body};
      font-size: 1;
      line-height: text;
    `,
    headingLarge: css`
      font-family: ${fontfamily__body};
      font-size: 36px;
      line-height: ${lineheight__heading};
      font-weight: semiBold;
    `,
    headingMedium: css`
      font-family: ${fontfamily__heading};
      font-size: 30px;
      line-height: ${lineheight__heading};
      font-weight: semiBold;
    `,
    headingSmall: css`
      font-family: ${fontfamily__heading};
      font-size: 5;
      line-height: ${lineheight__heading};
      font-weight: semiBold;
    `,
    sectionHeadingLarge: css`
      font-family: ${fontfamily__heading};
      font-size: 18px;
      line-height: heading;
      font-weight: semiBold;
    `,
    sectionHeadingMedium: css`
      font-family: heading;
      font-size: 2;
      line-height: heading;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    `,
    sectionHeadingSmall: css`
      font-family: heading;
      font-size: 1;
      line-height: heading;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    `,
    overlineMedium: css`
      font-family: ${fontfamily__body};
      font-size: 2;
      line-height: heading;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    `,
    overlineSmall: css`
      font-family: ${fontfamily__body};
      font-size: 1;
      line-height: heading;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    `,
    captionMedium: css`
      font-family: ${fontfamily__body};
      font-size: 2;
      line-height: text;
      font-weight: normal;
    `
  }
});

const BaseText = styled.div<{
  variant: VariantType;
  fontStyle: FontStyleType;
  fontWeight: FontWeightType;
}>`
  ${fontStyleVariants}
  ${fontWeightVariants}
  ${typeVariants}
`;

export type VariantType =
  | "bodyLarge"
  | "bodyMedium"
  | "bodySmall"
  | "headingLarge"
  | "headingMedium"
  | "headingSmall"
  | "sectionHeadingLarge"
  | "sectionHeadingMedium"
  | "sectionHeadingSmall"
  | "overlineMedium"
  | "overlineSmall"
  | "captionMedium";

  export type FontStyleType = "normal" | "italic";
  export type FontWeightType = "normal" | "semiBold";

  const getElement = (v: VariantType) => {
    let element;
    switch (v) {
      case "headingLarge":
        element = "h1";
        break;
      case "headingMedium":
        element = "h2";
        break;
      case "headingSmall":
        element = "h3";
        break;
      case "sectionHeadingLarge":
        element = "h4";
        break;
      case "sectionHeadingMedium":
        element = "h5";
        break;
      case "sectionHeadingSmall":
        element = "h6";
        break;
      case "captionMedium":
        element = "span";
        break;
      default:
        element = "p";
        break;
    }
    return element;
  };
  

  export interface TextProps {
    /** Sets the variants for the Text component */
    variant?: VariantType;
    /** Sets the font-style for the Text component */
    fontStyle?: FontStyleType;
    /** Sets the font-weight for the Text component */
    fontWeight?: FontWeightType;
    /** Pass className to base element for the Text Component */
    className?: string;
    /** Custom HTML tag to be used as base element */
    element?: any;
  }

  export const Text: React.FC<TextProps> = ({
    variant = "bodyMedium",
    fontStyle = "normal",
    fontWeight = "normal",
    children,
    element: customElement,
    ...props
  }) => {
    const element = customElement || getElement(variant);
  
    return (
      <BaseText
        as={element}
        variant={variant}
        fontStyle={fontStyle}
        fontWeight={fontWeight}
        {...props}
      >
        {children}
      </BaseText>
    );
  };