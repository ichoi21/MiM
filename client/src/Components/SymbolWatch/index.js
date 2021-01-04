import React, { useContext, useEffect, useState } from "react";
import Card from "../Card"
import Axios from "axios";
import SearchContent from "../SearchContent"
import Finnhub from "../api/finnhub";

function index() {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const [search, setSearch] = useState("");
// const [quote, setQuote] = useState([]);
  const [error, setError] = useState();
  const [result, setResult] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [rowInfo, setRowInfo] = useState([]);
  const [show, setShow] = useState(false);
  const placeHolder = [];
  let rows = [];

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
<Card isShown={show}>
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
            </Card>
  )
}

export default index
