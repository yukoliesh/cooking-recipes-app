import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffc107',
      dark: '#c79100'
    },
    secondary: {
      main: '#808e95',
      light: '#b0bec5'
    },
  }
});


export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      '& > *': {
        margin: theme.spacing(1),
      },
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
      marginRight: theme.spacing(1)
    },
    link: {
      marginRight: theme.spacing(1)
    }
  }),
);
