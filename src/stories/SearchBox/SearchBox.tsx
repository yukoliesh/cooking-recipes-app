import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

export interface SearchBoxProps {

}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const SearchBox: React.FC<SearchBoxProps> = (SearchBoxProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField 
            id="outlined-basic" 
            label="Search" 
            variant="filled" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
          }} />
        </form>
      </Grid>
    </Grid>
  );
};
