<<<<<<< HEAD
const express = require("express");
const Axios = require("axios");
const auth = require("../middleware/auth");
//const ProfileRouter = express.Router();

//load Profile

//load FinHub
=======
const router = require("express").Router();
const Axios = require("axios");

router.post("/quote", async (req,res) => {
    try{
        let result = {}
        let symbol = req.body.symbol
      await Axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FIN_TOKEN}`)
      .then((res)=> result.quote = res.data)
      await Axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${process.env.FIN_TOKEN}`)
      .then((res) => result.profile = res.data)
      await Axios.get(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=2020-04-30&to=2020-05-01&token=${process.env.FIN_TOKEN}`)
      .then((res) => result.news = res.data)
      await Axios.get(`https://finnhub.io/api/v1 /stock/candle?symbol=${symbol}&resolution=1&from=1605543327&to=1605629727&token=${process.env.FIN_TOKEN}`)
      .then((res) => result.candles = res.data)
      
      res.send(result)
    }
    catch(err){
        res.status(500).json({ error: err.message });
      }
    
})

module.exports = router;
>>>>>>> 98ef8403ea16b614176dc1445821309f132a9aea
