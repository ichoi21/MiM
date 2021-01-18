import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    },
  }));


export default function SearchBar(props) {
  const classes = useStyles();

  return (

<form className={classes.root}>
    <TextField variant="outlined" label="Search for a Symbol…" onChange={props.onChange} 
      InputProps={{ 'aria-label': 'search' }}
      autoComplete="off"
    ><SearchIcon /></TextField>
    <Button onClick={props.onClick} color="success"><SearchIcon color="primary"/></Button>
</form>
  );
}

