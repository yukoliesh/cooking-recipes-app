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