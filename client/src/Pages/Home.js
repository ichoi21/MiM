import React, { useContext, useEffect, useState } from "react";
import { Box, Grid, Card, Paper, makeStyles } from "@material-ui/core";

import {User} from "../Context/UserContext";
import Hero from "../Components/Hero"
import SearchBar from "../Components/SearchBar/index";
import SearchContent from "../Components/SearchContent/index"
import Sector from "../Components/Sector/index"
// import SymbolWatch from "../Components/SymbolWatch";
import Table from "../Components/Table/index";
import Footer from "../Components/Footer";
import "./Styles.css"
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Finnhub from "../api/finnhub";
import { TickerCard, NewsCard } from "../Components/Card";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();
  const { userData, setUserData } = useContext(User);
  const history = useHistory();

const [search, setSearch] = useState("");
const [error, setError] = useState();
const [result, setResult] = useState([]);
const [news, setNews] = useState([]);
const [watchlist, setWatchlist] = useState([]);
const [rowInfo, setRowInfo] = useState([]);
const [show, setShow] = useState(false);
const placeHolder = [];
let rows = [];

const getQuote = (e) => {
  e.preventDefault();
   Finnhub.getData("TSLA").then((res) => {
    console.log(res);
    setShow(true);
  });
}

// get symbol under construction
const getTicker = (id) => {
 return Axios.get(`/users/find/${id}`, {
    headers: { "x-auth-token": localStorage.getItem("auth-token") },
  }); 
}

  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, [userData.user, history]);

  
  return (
    <>
    <Box mx="auto" p={2} className="home">
    <Grid container spacing={2} justify="center" direction="row" alignItems="flex-start">
      {/* Major Indices Cards */}
      <Grid item sm={12}>
        <Paper className={classes.paper} elevation={2}>
          <Hero/>
        </Paper>
      </Grid>
      {/* Stocks Search */}
      <Grid item sm={12}>
          {/* <SearchBar onChange={(e)=> setSearch(e.target.value)} onClick={getQuote}/> */}
      </Grid>
      {/* Sector display
      <Grid container item sm={12} lg={12}>
        <Sector/>
      </Grid> */}
      {/* Search Result */}
      <Grid item sm={12} md={8} justify="center">
        <Paper className={classes.paper}>
          {/* <SymbolWatch/> */}
          {/* Would like to move 103-143 into its own component named above */}
          {/* <TickerCard isShown={show}>
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
            </TickerCard> */}
        </Paper>
      </Grid>
      {/* User's Watchlist */}
      <Grid item sm={12} md={4} justify="center">
        <Paper className={classes.paper}>
          <Table rows={rowInfo} />
        </Paper>
      </Grid>
      <Grid item sm={12} md={4} justify="center">
        {/* {news.map((item) => {
          return (
            <Card >
              <Paper className={classes.paper}>
                <NewsCard image={item.image} headline={item.headline} summary={item.summary}/>
              </Paper>
            </Card>
            )
        })} */}
        </Grid>
    </Grid>
    </Box>
    <Footer/>
  </>
    );
};

export default Home;