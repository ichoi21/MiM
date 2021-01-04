import { Grid, Link, makeStyles, spacing, Typography } from "@material-ui/core";
import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import Hero from "../Components/Hero"
import SearchBar from "../Components/SearchBar/index";
import SearchContent from "../Components/SearchContent/index"
// import SymbolWatch from "../Components/SymbolWatch";
import Table from "../Components/Table/index";
import Footer from "../Components/Footer";
import Finnhub from "../api/finnhub";
import TickerCard from "../Components/Card";

const Home = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const indices = ["S&P 500", "NASDAQ", "DJIA", "RUSSELL"];

const [search, setSearch] = useState("");
// const [quote, setQuote] = useState([]);
const [error, setError] = useState();
const [result, setResult] = useState([]);
const [watchlist, setWatchlist] = useState([]);
const [rowInfo, setRowInfo] = useState([]);
const [show, setShow] = useState(false);
const placeHolder = [];
let rows = [];


// grabs info about searched ticker ISSUE: pulls 5 cards
const getQuote = (e) =>{
  e.preventDefault();
   Finnhub.getData(search).then((res) => {
    console.log(res);
    setResult(res.data);
    setShow(true);
  });
}

// get symbol under construction
const getTicker = (id) => {
 return Axios.get(`/users/find/${id}`, {
    headers: { "x-auth-token": localStorage.getItem("auth-token") },
  }); 
}

//renders watchlist
const renderWatchlist = async () => {
  await Axios.get("/users/renderWatchlist", {
    headers: { "x-auth-token": localStorage.getItem("auth-token") },
  }).then(async (res) => {
    setWatchlist(res.data);
     for (let i = 0; i < res.data.length; i++) {
      placeHolder.push(res.data[i].ticker)
    }
     for (let i = 0; i < placeHolder.length; i++) {
      await Finnhub.getData(placeHolder[i]).then((res) => {
        let item = {
          symbol: res.data.symbol,
          name: res.data.companyName,
          last: res.data.latestPrice,
          high: res.data.high,
          low:  res.data.low,
          vol: res.data.latestVolume,
        }
        rows.push(item)
      })
    }
    setRowInfo(rows);
  });
};

  useEffect(() => {
    if (!userData.user) history.push("/login");
    renderWatchlist();
  }, [userData.user, history]);

  return (
    <>
    <Grid container spacing={2} justify="center" style={{ padding: 25 }}>
      {/* Major Indices Cards */}
      <Grid container item sm={12} spacing={2} justify="center" alignItems="center">
        {/* {indices.map((item,index) => {
          return (
            <Grid container item sm={3}>
              <Card text={item}isShown={true}/> 
            </Grid>
            
          )
        })} */}
        <Hero/>
      </Grid>
      {/* Stocks Search */}
      <Grid container item sm={12} lg={12} justify="center">
        <SearchBar onChange={(e)=> setSearch(e.target.value)} onClick={getQuote}/>
      </Grid>
      {/* Search Result */}
      <Grid container item sm={12} lg={9} justify="center">
        {/* <SymbolWatch/> */}
        {/* Would like to move 103-143 into its own component named above */}
        <TickerCard isShown={show}>
              <p onClick={async () => {
                let saveTicker = {
                  ticker:result.symbol,
                };
                // adds ticker to watchlist
                await Axios.post("/users/addWatchlist", saveTicker, {
                  headers: { "x-auth-token": localStorage.getItem("auth-token") },
                });
                console.log("Added to watchlist");
                renderWatchlist();
              }}>Add to Watchlist</p>
              <SearchContent 
                ticker={result.symbol}
                name={result.companyName}
                open={result.open}
                high={result.high}
                vol={result.volume}
                // threeMonth={result.financial.metric["3MonthAverageTradingVolume"]}
                fwh={result.week52High}
                marketCap={result.marketCapn}
                // // pefwd={}
                // eps={result.financial.metric.epsBasicExclExtraItemsAnnual}
                // // pturnover={}
                // // sharesOut={}
                // // ffmc={}
                // // lotSize={}
                last={result.latestPrice}
                low={result.low}
                // turnover={result.financial.metric.inventoryTurnoverTTM}
                // // range={}
                fwl={result.week52Low}
                // // pettm={}
                // dividend={result.financial.metric.dividendsPerShareTTM}
                // divYield={result.financial.metric.dividendYieldIndicatedAnnual}
                // pb={result.financial.metric.payoutRatioTTM}
                // // freeFloat={}
                // beta={result.financial.metric.beta}
                // // edd={}
                />
            </TickerCard>
      </Grid>
      {/* User's Watchlist */}
      <Grid container item sm={12} lg={3} justify="center">
        <Table rows={rowInfo} />
      </Grid>
      <Footer/>
    </Grid>
  </>
    );
};

export default Home;