import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {SearchContext, Search} from '../../Context/TickerContext'
import Finnhub from "../../api/finnhub";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    },
  }));

// function to get quote
const getQuote = ( ticker) => {
  
   Finnhub.getData(ticker).then((res) => {
    console.log(res);
  });
}

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
    <Button onClick={() => getQuote(searchModel.name.value)} color="success"><SearchIcon color="primary"/></Button>
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

// this creates global state for quote info
export const QuoteContext = React.createContext(); 


export const QuoteContent = ({children}) => {
    const [state, setState] = useState();
    return (
        <QuoteContext.Provider value={[state,setState]}>{children}</QuoteContext.Provider>
    )
}