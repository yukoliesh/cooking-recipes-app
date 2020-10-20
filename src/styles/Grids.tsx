import styled from "@xstyled/styled-components";
import {
  backgrounds,
  color,
  flexboxes,
  positioning,
  shadows,
  space,
  BackgroundsProps,
  ColorProps,
  FlexboxesProps,
  PositioningProps,
  ShadowsProps,
  SpaceProps,
} from "@xstyled/system";

type Props = FlexboxesProps &
  SpaceProps &
  ColorProps &
  BackgroundsProps &
  ShadowsProps &
  PositioningProps;

export const Grids = styled.div`

`;

export const Row = styled.div<{justifyContent: string, alignItems: string}>`
  display: flex;
  width: 100%;
  justify-content: ${(props) => props.justifyContent };
  align-items: ${(props) => props.alignItems};
`;

export const Col = styled.div<{size?: number, width?: string, maxWidth?: string}>`
  flex: ${(props) => props.size };
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
`;

export const Box = styled.div<Props>`
  min-width: 0;
  display: flex;
  ${flexboxes}
  ${space}
  ${color}
  ${backgrounds}
  ${shadows}
  ${positioning}
`;