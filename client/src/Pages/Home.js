import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";
import TableList from "../Components/TableList";
import TableBody from "../Components/TableBody";
import SearchContent from "../Components/SearchContent";
import Footer from "../Components/Footer"
import Axios from "axios";
import {Col, Row} from 'reactstrap';

import Finnhub from "../api/finnhub";

const Home = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

const [search, setSearch] = useState("");
const [error, setError] = useState();
const [result, setResult] = useState([]);
const [quote, setQuote] = useState([]);
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
  });
};

const renderWl = () => {
  watchlist.map((item) => {
     Finnhub.getData(item).then((res) => {
       console.log(res);
       setQuote(res.data);
     })
  })
}
    
  useEffect( async() => {
    if (!userData.user) history.push("/login");
  }, [userData.user, history]);

  return (
    <>
  <h1>dMiM $tock search</h1>
  <SearchBar onChange={ (e)=>setSearch(e.target.value)} onClick={getQuote}/>
  <Row>
      <Col sm="6">
      {Object.keys(result).map((item,index)=>{
    return (
<Card>
    <p onClick={async () => {
                let saveTicker = {ticker: result.financial.symbol};
                await Axios.post("/users/addWatchlist", saveTicker, {
                  headers: { "x-auth-token": localStorage.getItem("auth-token") },
                });
                console.log("Added to watchlist");
                console.log(quote);
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
      </Col>
      <Col sm="6">
      <TableList>
  {quote.map((item) => {
      return (
<TableBody ticker={item.financial.symbol}  
                        onClick={async () => {
                          await Axios.delete(
                            `users/deleteWatchList/${item._id}`,
                            {
                              headers: {
                                "x-auth-token": localStorage.getItem(
                                  "auth-token"
                                ),
                              },
                            }
                          );
                          // renderWatchlist();
                        }}
/>
      
      )
    })}
  </TableList>
      </Col>
  </Row>
  <Footer/>
  </>
    );
};

export default Home;
