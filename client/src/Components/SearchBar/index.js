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

// function to get quote
// need to build out the object to show up on the component searchcontent
const quoteResult = {
  isShown: false,
  result: [

  ],
};
const getQuote = ( ticker) => {
   Finnhub.getData(ticker).then((res) => {
    quoteResult.result = res.data;
    quoteResult.isShown = true;
    console.log(quoteResult);
  });
}

// this creates global state for quote info
export const QuoteContext = React.createContext({
  symbol: {
    value: "",
    onChange: () => {},
  },
  companyName: {
    value: "",
    onChange: () => {},
  },
  primaryExchange: {
    value: "",
    onChange: () => {},
  },
  calculationPrice: {
    value: "",
    onChange: () => {},
  },
  open: {
    value: "",
    onChange: () => {},
  },
  openTime: {
    value: "",
    onChange: () => {},
  },
  openSource: {
    value: "",
    onChange: () => {},
  },
  close: {
    value: "",
    onChange: () => {},
  },
  closeTime: {
    value: "",
    onChange: () => {},
  },
  closeSource: {
    value: "",
    onChange: () => {},
  },
  high: {
    value: "",
    onChange: () => {},
  },
  highTime: {
    value: "",
    onChange: () => {},
  },
  highSource: {
    value: "",
    onChange: () => {},
  },
  low: {
    value: "",
    onChange: () => {},
  },
  lowTime: {
    value: "",
    onChange: () => {},
  },
  lowSource: {
    value: "",
    onChange: () => {},
  },
  latestPrice: {
    value: "",
    onChange: () => {},
  },
  latestSource: {
    value: "",
    onChange: () => {},
  },
  latestTime: {
    value: "",
    onChange: () => {},
  },
  latestUpdate: {
    value: "",
    onChange: () => {},
  },
  latestVolume: {
    value: "",
    onChange: () => {},
  },
  iexRealtimePrice: {
    value: "",
    onChange: () => {},
  },
  iexRealtimeSize: {
    value: "",
    onChange: () => {},
  },
  iexLastUpdated: {
    value: "",
    onChange: () => {},
  },
  delayedPrice: {
    value: "",
    onChange: () => {},
  },
  delayedPriceTime: {
    value: "",
    onChange: () => {},
  },
  oddLotDelayedPrice: {
    value: "",
    onChange: () => {},
  },
  oddLotDelayedPriceTime: {
    value: "",
    onChange: () => {},
  },
  extendedPrice: {
    value: "",
    onChange: () => {},
  },
  extendedChange: {
    value: "",
    onChange: () => {},
  },
  extendedChangePercent: {
    value: "",
    onChange: () => {},
  },
  previousClose: {
    value: "",
    onChange: () => {},
  },
  previousVolume: {
    value: "",
    onChange: () => {},
  },
  change: {
    value: "",
    onChange: () => {},
  },
  changePercent: {
    value: "",
    onChange: () => {},
  },
  volume: {
    value: "",
    onChange: () => {},
  },
  iexMarketPercent: {
    value: "",
    onChange: () => {},
  },
  iexVolume: {
    value: "",
    onChange: () => {},
  },
  avgTotalVolume: {
    value: "",
    onChange: () => {},
  },
  iexBidPrice: {
    value: "",
    onChange: () => {},
  },
  iexBidSize: {
    value: "",
    onChange: () => {},
  },
  iexAskPrice: {
    value: "",
    onChange: () => {},
  },
  iexAskSize: {
    value: "",
    onChange: () => {},
  },
  iexOpen: {
    value: "",
    onChange: () => {},
  },
  iexOpenTime: {
    value: "",
    onChange: () => {},
  },
  iexClose: {
    value: "",
    onChange: () => {},
  },
  iexCloseTime: {
    value: "",
    onChange: () => {},
  },
  marketCap: {
    value: "",
    onChange: () => {},
  },
  peRatio: {
    value: "",
    onChange: () => {},
  },
  week52High: {
    value: "",
    onChange: () => {},
  },
  week52Low: {
    value: "",
    onChange: () => {},
  },
  ytdChange: {
    value: "",
    onChange: () => {},
  },
  lastTradeTime: {
    value: "",
    onChange: () => {},
  },
  isUSMarketOpen: {
    value: "",
    onChange: () => {},
  },
}); 

export const Quote = () => {
  const [symbol, setSymbol] = useState();
  const [companyName, setCompanyName] = useState();
  const [primaryExchange, setPrimaryExchange] = useState();
  const [calculationPrice, setCalculationPrice] = useState();
  const [open, setOpen] = useState();
  const [openTime, setOpenTime] = useState();
  const [openSource, setOpenSource] = useState();
  const [close, setClose] = useState();
  const [closeTime, setCloseTime] = useState();
  const [closeSource, setCloseSource] = useState();
  const [high, setHigh] = useState();
  const [highTime, setHighTime] = useState();
  const [highSource, setHighSource] = useState();
  const [low, setLow] = useState();
  const [lowTime, setLowTime] = useState();
  const [lowSource, setLowSource] = useState();
  const [latestPrice, setLatestPrice] = useState();
  const [latestSource, setLatestSource] = useState();
  const [latestTime, setLatestTime] = useState();
  const [latestUpdate, setLatestUpdate] = useState();
  const [latestVolume, setLatestVolume] = useState();
  const [iexRealtimePrice, setIexRealtimePrice] = useState();
  const [iexRealtimeSize, setIexRealtimeSize] = useState();
  const [iexLastUpdated, setIexLastUpdated] = useState();
  const [delayedPrice, setDelayedPrice] = useState();
  const [delayedPriceTime, setDelayedPriceTime] = useState();
  const [oddLotDelayedPrice, setOddLotDelayedPrice] = useState();
  const [oddLotDelayedPriceTime, setOddLotDelayedPriceTime] = useState();
  const [extendedPrice, setExtendedPrice] = useState();
  const [extendedChange, setExtendedChange] = useState();
  const [extendedChangePercent, setExtendedChangePercent] = useState();
  const [extendedPriceTime, setExtendedPriceTime] = useState();
  const [previousClose, setPreviousClose] = useState();
  const [previousVolume, setPreviousVolume] = useState();
  const [change, setChange] = useState();
  const [changePercent, setChangePercent] = useState();
  const [volume, setVolume] = useState();
  const [iexMarketPercent, setIexMarketPercent] = useState();
  const [iexVolume, setIexVolume] = useState();
  const [avgTotalVolume, setAvgTotalVolume] = useState();
  const [iexBidPrice, setIexBidPrice] = useState();
  const [iexBidSize, setIexBidSize] = useState();
  const [iexAskPrice, setIexAskPrice] = useState();
  const [iexAskSize, setIexAskSize] = useState();
  const [iexOpen, setIexOpen] = useState();
  const [iexOpenTime, setIexOpenTime] = useState();
  const [iexClose, setIexClose] = useState();
  const [iexCloseTime, setIexCloseTime] = useState();
  const [marketCap, setMarketCap] = useState();
  const [peRatio, setPeRatio] = useState();
  const [week52High, setWeek52High] = useState();
  const [week52Low, setWeek52Low] = useState();
  const [ytdChange, setYtdChange] = useState();
  const [lastTradeTime, setLastTradeTime] = useState();
  const [isUSMarketOpen, setIsUSMarketOpen] = useState();

  return {
  symbol: {
    value: symbol,
    onChange: (e) => setSymbol(e.target.value),
  },
  companyName: {
    value: companyName,
    onChange: () => setCompanyName(quoteResult.result.quote.companyName),
  },
  primaryExchange: {
    value: primaryExchange,
    onChange: (e) => setPrimaryExchange(e.target.value),
  },
  calculationPrice: {
    value: calculationPrice,
    onChange: (e) => setCalculationPrice(e.target.value),
  },
  open: {
    value: open,
    onChange: (e) => setOpen(e.target.value),
  },
  openTime: {
    value: openTime,
    onChange: (e) => setOpenTime(e.target.value),
  },
  openSource: {
    value: openSource,
    onChange: (e) => setOpenSource(e.target.value),
  },
  close: {
    value: close,
    onChange: (e) => setClose(e.target.value),
  },
  closeTime: {
    value: closeTime,
    onChange: (e) => setCloseTime(e.target.value),
  },
  closeSource: {
    value: closeSource,
    onChange: (e) => setCloseSource(e.target.value),
  },
  high: {
    value: high,
    onChange: (e) => setHigh(e.target.value),
  },
  highTime: {
    value: highTime,
    onChange: (e) => setHighTime(e.target.value),
  },
  highSource: {
    value: highSource,
    onChange: (e) => setHighSource(e.target.value),
  },
  low: {
    value: low,
    onChange: (e) => setLow(e.target.value),
  },
  lowTime: {
    value: lowTime,
    onChange: (e) => setLowTime(e.target.value),
  },
  lowSource: {
    value: lowSource,
    onChange: (e) => setLowSource(e.target.value),
  },
  latestPrice: {
    value: latestPrice,
    onChange: (e) => setLatestPrice(e.target.value),
  },
  latestSource: {
    value: latestSource,
    onChange: (e) => setLatestSource(e.target.value),
  },
  latestTime: {
    value: latestTime,
    onChange: (e) => setLatestTime(e.target.value),
  },
  latestUpdate: {
    value: latestUpdate,
    onChange: (e) => setLatestUpdate(e.target.value),
  },
  latestVolume: {
    value: latestVolume,
    onChange: (e) => setLatestVolume(e.target.value),
  },
  iexRealtimePrice: {
    value: iexRealtimePrice,
    onChange: (e) => setIexRealtimePrice(e.target.value),
  },
  iexRealtimeSize: {
    value: iexRealtimeSize,
    onChange: (e) => setIexRealtimeSize(e.target.value),
  },
  iexLastUpdated: {
    value: iexLastUpdated,
    onChange: (e) => setIexLastUpdated(e.target.value),
  },
  delayedPrice: {
    value: delayedPrice,
    onChange: (e) => setDelayedPrice(e.target.value),
  },
  delayedPriceTime: {
    value: delayedPriceTime,
    onChange: (e) => setDelayedPriceTime(e.target.value),
  },
  oddLotDelayedPrice: {
    value: oddLotDelayedPrice,
    onChange: (e) => setOddLotDelayedPrice(e.target.value),
  },
  oddLotDelayedPriceTime: {
    value: oddLotDelayedPriceTime,
    onChange: (e) => setOddLotDelayedPriceTime(e.target.value),
  },
  extendedPrice: {
    value: extendedPrice,
    onChange: (e) => setExtendedPrice(e.target.value),
  },
  extendedChange: {
    value: extendedChange,
    onChange: (e) => setExtendedChange(e.target.value),
  },
  extendedChangePercent: {
    value: extendedChangePercent,
    onChange: (e) => setExtendedChangePercent(e.target.value),
  },
  previousClose: {
    value: previousClose,
    onChange: (e) => setPreviousClose(e.target.value),
  },
  previousVolume: {
    value: previousVolume,
    onChange: (e) => setPreviousVolume(e.target.value),
  },
  change: {
    value: change,
    onChange: (e) => setChange(e.target.value),
  },
  changePercent: {
    value: changePercent,
    onChange: (e) => setChangePercent(e.target.value),
  },
  volume: {
    value: volume,
    onChange: (e) => setVolume(e.target.value),
  },
  iexMarketPercent: {
    value: iexMarketPercent,
    onChange: (e) => setIexMarketPercent(e.target.value),
  },
  iexVolume: {
    value: iexVolume,
    onChange: (e) => setIexVolume(e.target.value),
  },
  avgTotalVolume: {
    value: avgTotalVolume,
    onChange: (e) => setAvgTotalVolume(e.target.value),
  },
  iexBidPrice: {
    value: iexBidPrice,
    onChange: (e) => setIexBidPrice(e.target.value),
  },
  iexBidSize: {
    value: iexBidSize,
    onChange: (e) => setIexBidSize(e.target.value),
  },
  iexAskPrice: {
    value: iexAskPrice,
    onChange: (e) => setIexAskPrice(e.target.value),
  },
  iexAskSize: {
    value: iexAskSize,
    onChange: (e) => setIexAskSize(e.target.value),
  },
  iexOpen: {
    value: iexOpen,
    onChange: (e) => setIexOpen(e.target.value),
  },
  iexOpenTime: {
    value: iexOpenTime,
    onChange: (e) => setIexOpenTime(e.target.value),
  },
  iexClose: {
    value: iexClose,
    onChange: (e) => setIexClose(e.target.value),
  },
  iexCloseTime: {
    value: iexCloseTime,
    onChange: (e) => setIexCloseTime(e.target.value),
  },
  marketCap: {
    value: marketCap,
    onChange: (e) => setMarketCap(e.target.value),
  },
  peRatio: {
    value: peRatio,
    onChange: (e) => setPeRatio(e.target.value),
  },
  week52High: {
    value: week52High,
    onChange: (e) => setWeek52High(e.target.value),
  },
  week52Low: {
    value: week52Low,
    onChange: (e) => setWeek52Low(e.target.value),
  },
  ytdChange: {
    value: ytdChange,
    onChange: (e) => setYtdChange(e.target.value),
  },
  lastTradeTime: {
    value: lastTradeTime,
    onChange: (e) => setLastTradeTime(e.target.value),
  },
  isUSMarketOpen: {
    value: isUSMarketOpen,
    onChange: (e) => setIsUSMarketOpen(e.target.value),
  },
      } 
}

export const QuoteContent = ({children}) => {
    const useQuote = Quote();
    return (
        <QuoteContext.Provider value={useQuote}>{children}</QuoteContext.Provider>
    )
}