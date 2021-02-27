import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, TextField, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {SearchContext, Search} from '../../Context/TickerContext'
import Finnhub from "../../api/finnhub";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    },
  }));

// SearchForm builds the component
export const SearchForm = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const searchModel = React.useContext(SearchContext);

  return (
<form className={classes.root}>
<Box width="100%">
<Paper>
    <TextField variant="outlined" label="Search for a Symbol…" {...searchModel.name} 
      InputProps={{ 'aria-label': 'search' }}
      autoComplete="off"
    ><SearchIcon /></TextField>
    <Button onClick={() => {getQuote(searchModel.name.value); history.push("/search")}} color="success"><SearchIcon color="primary"/></Button>
    </Paper>
    </Box>
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

// function to get quote
// need to build out the object to show up on the component searchcontent
const quoteResult = {
  isShown: false,
  result: {
    quote: {
      companyName: "",
    }
    }
};

const getQuote = ( ticker) => {
   Finnhub.getData(ticker).then((res) => {
    quoteResult.result.quote.companyName = res.data.quote.companyName;
    quoteResult.isShown = true;
  
    console.log(quoteResult);
  });
}

// this creates global state for quote info
export const QuoteContext = React.createContext(
  // {
  // symbol: {
  //   value: "",
  //   onChange: () => {},
  // },
  // companyName: {
  //   value: "",
  //   onChange: () => {},
  // },
  // primaryExchange: {
  //   value: "",
  //   onChange: () => {},
  // },
  // calculationPrice: {
  //   value: "",
  //   onChange: () => {},
  // },
  // open: {
  //   value: "",
  //   onChange: () => {},
  // },
  // openTime: {
  //   value: "",
  //   onChange: () => {},
  // },
  // openSource: {
  //   value: "",
  //   onChange: () => {},
  // },
  // close: {
  //   value: "",
  //   onChange: () => {},
  // },
  // closeTime: {
  //   value: "",
  //   onChange: () => {},
  // },
  // closeSource: {
  //   value: "",
  //   onChange: () => {},
  // },
  // high: {
  //   value: "",
  //   onChange: () => {},
  // },
  // highTime: {
  //   value: "",
  //   onChange: () => {},
  // },
  // highSource: {
  //   value: "",
  //   onChange: () => {},
  // },
  // low: {
  //   value: "",
  //   onChange: () => {},
  // },
  // lowTime: {
  //   value: "",
  //   onChange: () => {},
  // },
  // lowSource: {
  //   value: "",
  //   onChange: () => {},
  // },
  // latestPrice: {
  //   value: "",
  //   onChange: () => {},
  // },
  // latestSource: {
  //   value: "",
  //   onChange: () => {},
  // },
  // latestTime: {
  //   value: "",
  //   onChange: () => {},
  // },
  // latestUpdate: {
  //   value: "",
  //   onChange: () => {},
  // },
  // latestVolume: {
  //   value: "",
  //   onChange: () => {},
  // },
  // iexRealtimePrice: {
  //   value: "",
  //   onChange: () => {},
  // },
  // iexRealtimeSize: {
  //   value: "",
  //   onChange: () => {},
  // },
  // iexLastUpdated: {
  //   value: "",
  //   onChange: () => {},
  // },
  // delayedPrice: {
  //   value: "",
  //   onChange: () => {},
  // },
  // delayedPriceTime: {
  //   value: "",
  //   onChange: () => {},
  // },
  // oddLotDelayedPrice: {
  //   value: "",
  //   onChange: () => {},
  // },
  // oddLotDelayedPriceTime: {
  //   value: "",
  //   onChange: () => {},
  // },
  // extendedPrice: {
  //   value: "",
  //   onChange: () => {},
  // },
  // extendedChange: {
  //   value: "",
  //   onChange: () => {},
  // },
  // extendedChangePercent: {
  //   value: "",
  //   onChange: () => {},
  // },
  // previousClose: {
  //   value: "",
  //   onChange: () => {},
  // },
  // previousVolume: {
  //   value: "",
  //   onChange: () => {},
  // },
  // change: {
  //   value: "",
  //   onChange: () => {},
  // },
  // changePercent: {
  //   value: "",
  //   onChange: () => {},
  // },
  // volume: {
  //   value: "",
  //   onChange: () => {},
  // },
  // iexMarketPercent: {
  //   value: "",
  //   onChange: () => {},
  // },
  // iexVolume: {
  //   value: "",
  //   onChange: () => {},
  // },
  // avgTotalVolume: {
  //   value: "",
  //   onChange: () => {},
  // },
  // iexBidPrice: {
  //   value: "",
  //   onChange: () => {},
  // },
  // iexBidSize: {
  //   value: "",
  //   onChange: () => {},
  // },
  // iexAskPrice: {
  //   value: "",
  //   onChange: () => {},
  // },
  // iexAskSize: {
  //   value: "",
  //   onChange: () => {},
  // },
  // iexOpen: {
  //   value: "",
  //   onChange: () => {},
  // },
  // iexOpenTime: {
  //   value: "",
  //   onChange: () => {},
  // },
  // iexClose: {
  //   value: "",
  //   onChange: () => {},
  // },
  // iexCloseTime: {
  //   value: "",
  //   onChange: () => {},
  // },
  // marketCap: {
  //   value: "",
  //   onChange: () => {},
  // },
  // peRatio: {
  //   value: "",
  //   onChange: () => {},
  // },
  // week52High: {
  //   value: "",
  //   onChange: () => {},
  // },
  // week52Low: {
  //   value: "",
  //   onChange: () => {},
  // },
  // ytdChange: {
  //   value: "",
  //   onChange: () => {},
  // },
  // lastTradeTime: {
  //   value: "",
  //   onChange: () => {},
  // },
  // isUSMarketOpen: {
  //   value: "",
  //   onChange: () => {},
  // },
); 

// export const Quote = () => {
//   const [symbol, setSymbol] = useState();
//   const [companyName, setCompanyName] = useState();
//   const [primaryExchange, setPrimaryExchange] = useState();
//   const [calculationPrice, setCalculationPrice] = useState();
//   const [open, setOpen] = useState();
//   const [openTime, setOpenTime] = useState();
//   const [openSource, setOpenSource] = useState();
//   const [close, setClose] = useState();
//   const [closeTime, setCloseTime] = useState();
//   const [closeSource, setCloseSource] = useState();
//   const [high, setHigh] = useState();
//   const [highTime, setHighTime] = useState();
//   const [highSource, setHighSource] = useState();
//   const [low, setLow] = useState();
//   const [lowTime, setLowTime] = useState();
//   const [lowSource, setLowSource] = useState();
//   const [latestPrice, setLatestPrice] = useState();
//   const [latestSource, setLatestSource] = useState();
//   const [latestTime, setLatestTime] = useState();
//   const [latestUpdate, setLatestUpdate] = useState();
//   const [latestVolume, setLatestVolume] = useState();
//   const [iexRealtimePrice, setIexRealtimePrice] = useState();
//   const [iexRealtimeSize, setIexRealtimeSize] = useState();
//   const [iexLastUpdated, setIexLastUpdated] = useState();
//   const [delayedPrice, setDelayedPrice] = useState();
//   const [delayedPriceTime, setDelayedPriceTime] = useState();
//   const [oddLotDelayedPrice, setOddLotDelayedPrice] = useState();
//   const [oddLotDelayedPriceTime, setOddLotDelayedPriceTime] = useState();
//   const [extendedPrice, setExtendedPrice] = useState();
//   const [extendedChange, setExtendedChange] = useState();
//   const [extendedChangePercent, setExtendedChangePercent] = useState();
//   const [extendedPriceTime, setExtendedPriceTime] = useState();
//   const [previousClose, setPreviousClose] = useState();
//   const [previousVolume, setPreviousVolume] = useState();
//   const [change, setChange] = useState();
//   const [changePercent, setChangePercent] = useState();
//   const [volume, setVolume] = useState();
//   const [iexMarketPercent, setIexMarketPercent] = useState();
//   const [iexVolume, setIexVolume] = useState();
//   const [avgTotalVolume, setAvgTotalVolume] = useState();
//   const [iexBidPrice, setIexBidPrice] = useState();
//   const [iexBidSize, setIexBidSize] = useState();
//   const [iexAskPrice, setIexAskPrice] = useState();
//   const [iexAskSize, setIexAskSize] = useState();
//   const [iexOpen, setIexOpen] = useState();
//   const [iexOpenTime, setIexOpenTime] = useState();
//   const [iexClose, setIexClose] = useState();
//   const [iexCloseTime, setIexCloseTime] = useState();
//   const [marketCap, setMarketCap] = useState();
//   const [peRatio, setPeRatio] = useState();
//   const [week52High, setWeek52High] = useState();
//   const [week52Low, setWeek52Low] = useState();
//   const [ytdChange, setYtdChange] = useState();
//   const [lastTradeTime, setLastTradeTime] = useState();
//   const [isUSMarketOpen, setIsUSMarketOpen] = useState();

//   return {
  
// }

export const QuoteContent = ({children}) => {
    const [state, setState] = useState(quoteResult);
    return (
        <QuoteContext.Provider value={state}>{children}</QuoteContext.Provider>
    )
}