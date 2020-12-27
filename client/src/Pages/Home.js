import { Grid, Link, makeStyles, spacing, Typography } from "@material-ui/core";
import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Row } from 'reactstrap';

import Finnhub from "../api/finnhub";
import Card from "../Components/Card";
import Footer from "../Components/Footer"
import SearchBar from "../Components/SearchBar";
import SearchContent from "../Components/SearchContent";
import TableBody from "../Components/TableBody";
import TableList from "../Components/TableList";
import UserContext from "../Context/UserContext";

const Home = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const indices = ["S&P 500", "NASDAQ", "DIJA", "RUSSELL", "VIX"];

const [search, setSearch] = useState("");
// const [quote, setQuote] = useState([]);
const [error, setError] = useState();
const [result, setResult] = useState([]);
const [watchlist, setWatchlist] = useState([]);

const getQuote = (e) =>{
  e.preventDefault();
  Finnhub.getData(search).then((res) => {
    console.log(res);
    setResult(res.data);
  });
}

const renderWatchlist = async () => {
  await Axios.get("/users/renderWatchlist", {
    headers: { "x-auth-token": localStorage.getItem("auth-token") },
  }).then((res) => {
    setWatchlist(res.data);
    console.log(res.data);
  });
};
    
  useEffect(() => {
    if (!userData.user) history.push("/login");
    renderWatchlist();
    console.log(typeof result);
  }, [userData.user, history]);

  return (
    <>
    <Grid container spacing={2}>
      {/* Major Indices Cards */}
      <Grid container item sm={6} lg={6} spacing={2}>
        {indices.map((item,index) => {
          return (
            <Grid item sm={3}>
              <Card text={item}/>
            </Grid>
          )
        })}
      </Grid>
      {/* Stocks Search */}
      <Grid container item sm={10}>
        <SearchBar onChange={ (e)=>setSearch(e.target.value)} onClick={getQuote}/>
      </Grid>
        
      <Grid container item sm={6}>
        {Object.keys(result).map((item)=>{
          return (
            <Card>
              <p onClick={async () => {
                let saveTicker = {
                  ticker:result.financial.symbol,
                  name:result.profile.name,
                  last:result.quote.pc,
                  high:result.quote.h,
                  low:result.quote.l,
                };
                // adds ticker to watchlist
                await Axios.post("/users/addWatchlist", saveTicker, {
                  headers: { "x-auth-token": localStorage.getItem("auth-token") },
                });
                console.log("Added to watchlist");
                renderWatchlist();
              }}>Add to Watchlist</p>
              <SearchContent 
                ticker={result.financial.symbol}
                name={result.profile.name}
                open={result.quote.o}
                high={result.quote.h}
                // vol={}
                threeMonth={result.financial.metric["3MonthAverageTradingVolume"]}
                fwh={result.financial.metric["52WeekHigh"]}
                marketCap={result.financial.metric.marketCapitalization}
                // pefwd={}
                eps={result.financial.metric.epsBasicExclExtraItemsAnnual}
                // pturnover={}
                // sharesOut={}
                // ffmc={}
                // lotSize={}
                last={result.quote.pc}
                low={result.quote.l}
                turnover={result.financial.metric.inventoryTurnoverTTM}
                // range={}
                fwl={result.financial.metric["52WeekLow"]}
                // pettm={}
                dividend={result.financial.metric.dividendsPerShareTTM}
                divYield={result.financial.metric.dividendYieldIndicatedAnnual}
                pb={result.financial.metric.payoutRatioTTM}
                // freeFloat={}
                beta={result.financial.metric.beta}
                // edd={}
                />
            </Card>
          )
        })}
      </Grid>
      <Grid sm="6">
        <TableList>
          {watchlist.map((item) => {
            return (
              <TableBody ticker={item.ticker} name={item.name} last={item.last} high={item.high} low={item.low} 
                onClick={async () => {
              //removes watchlist
                await Axios.delete(
                  `users/remove/${item._id}`,
                  {headers: {
                    "x-auth-token": localStorage.getItem(
                    "auth-token"),
                    },
                  }
                );
                renderWatchlist();
              }}/>
            )
          })}
        </TableList>
      </Grid>
      <Footer/>
    </Grid>
  </>
    );
};

export default Home;