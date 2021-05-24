import React from 'react';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { theme, useStyles } from '../../styles/theme';
import '../../stories/button.css';



export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
   /**
   * Button Border
   */
  border?: string;
  /**
   * Optional click handler
   */
  onClick?: (e) => void;
}

/**
 * Primary UI component for user interaction
 */
export const StyledButton: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}) => {
  const classes = useStyles();
  const mode = primary ? 'primary' : 'secondary';
  return (
    <ThemeProvider theme={theme}>
      <Button
          variant="contained"
          color={mode}
          className={classes.button}
          {...props}
        >
          {label}
      </Button>
    </ThemeProvider>
  );
};
