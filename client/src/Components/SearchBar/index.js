import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, TextField, Paper } from '@material-ui/core';
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
  <Box width="100%">
    <Paper>
    <TextField fullWidth variant="outlined" label="Search for a Symbol…" 
      onChange={props.onChange} 
      onClick={props.onClick}
      autoComplete="off"
      >
    </TextField>
    {/* <Button onClick={props.onClick} color="success"><SearchIcon color="primary"/></Button> */}
    </Paper>
  </Box>
</form>
  );
}

