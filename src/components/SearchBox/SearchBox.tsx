import React from 'react';
import { Box } from "reflexbox";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import styled from "@xstyled/styled-components";
import './searchbox.css';

export interface SearchBoxProps {

}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35rem',
    },
  },
}));

const TextFieldWhite = styled(TextField)`
  background-color: #fff;
  opacity: 1;
`;

export const SearchBox: React.FC<SearchBoxProps> = (SearchBoxProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box>
      <form className={classes.root} noValidate autoComplete="off">
        <TextFieldWhite 
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
    </Box>
  );
};
