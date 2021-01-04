import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { Form, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    searchIcon: {
    //   padding: theme.spacing(0, 2),
      height: '80%',
    //   position: 'absolute',
    //   pointerEvents: 'none',
      display: 'flex',
      textColor: 'black',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      }, 
    },
  },
}));


export default function SearchBar(props) {
  const classes = useStyles();

  return (

<div className={classes.root}>
  <div className={classes.search}>
    <InputBase  placeholder="Search for a Symbol…" onChange={props.onChange} 
    classes={{
      root: classes.inputRoot,
      input: classes.inputInput,
    }}
    inputProps={{ 'aria-label': 'search' }}
    />
    <Button onClick={props.onClick} color="success"><SearchIcon /></Button>

  </div>
</div>
  );
}

