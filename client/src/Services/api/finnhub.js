import React, { useState, useEffect } from "react";
import axios from "axios";

const { FINNHUB_API_KEY } = process.env;
const SYMBOL = AAPL;

const finnhub = () => {
    const [finnhubState, setfinnhubState] = useState({
        TICKER: "",
        NAME: "",
        LAST: "",
        HIGH: "",
        LOW: "",
    });

    useEffect(async () => {
        try {
            const result = await axios({
                method: "GET",
                url: `https://finnhub.io/api/v1/quote?symbol=${SYMBOL}`,
                header: `X-Finnhub-Token:${FINNHUB_API_KEY}`,
            });
            setfinnhubState({ ...finnhubState, result });
        } catch (err) {
            throw new Error('Unabl e to get data.')
        }
    }, []);

    return (
        <div>
            
        </div>
    );

};

export default finnhub;