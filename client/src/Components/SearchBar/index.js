import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {SearchContext, Search} from '../../Context/TickerContext'


const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    },
  }));


// SearchForm builds the component
export const SearchForm = (props) => {
  const classes = useStyles();
  const searchModel = React.useContext(SearchContext);

  return (
<form className={classes.root}>
    <TextField variant="outlined" label="Search for a Symbol…" {...searchModel.name} 
      InputProps={{ 'aria-label': 'search' }}
      autoComplete="off"
    ><SearchIcon /></TextField>
    <Button onClick={props.onClick} color="success"><SearchIcon color="primary"/></Button>
</form>
  );
}

// SearchBar allows to access context globally. This is what you want to apply to other component
export const SearchBar = () => {
  const search = Search();
  return (
    <SearchContext.Provider value={search}>
      <SearchForm/>
    </SearchContext.Provider>
  )
}