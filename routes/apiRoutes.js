const router = require("express").Router();
const Axios = require("axios");
const auth = require("../middleware/auth");
const Quote = require("../models/quoteModel");
const User = require("../models/userModel");
//const ProfileRouter = express.Router();

//load Profile

// TEST IEX API

router.get("/quote/:symbol", async (req,res) => {
  try {
    let result;
    const symbol = req.params.symbol;
    await Axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${process.env.IEX_TOKEN}`)
    await Axios.get()
    .then((res) => result = res.data)

    res.send(result)
  } catch(err){
    res.status(500).json({ error: err.message });
  }
})

// get sector performance data
router.get("/sectors", async (req,res) => {
  try{
    let result;
    await Axios.get(`https://cloud.iexapis.com/stable/stock/market/sector-performance?token=${process.env.IEX_TOKEN}`)
    .then((res) => result = res.data)
    res.send(result)
  } catch(err){
    res.status(500).json({ error: err.message });
  }
})

// get news for watchlist
router.get("/news/:symbol", async (req,res) => {
  try {
    let result;
    const {symbol, count} = req.params;
    await Axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/news/last/1?token=${process.env.IEX_TOKEN}`)
    .then((res) => result = res.data)
    res.send(result)
  }
  catch(err){
    res.status(500).json({ error: err.message });
  }
})
//load FinHub MIGHT NOT NEED THIS ANYMORE

// router.get("/quote/:symbol", async (req,res) => {
//     try{
//         let result = {}
//         const symbol = req.params.symbol
//       await Axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FIN_TOKEN}`)
//       .then((res)=> result.quote = res.data)
//       await Axios.get(`https://finnhub.io/api/v1//stock/metric?symbol=${symbol}&metric=all&token=${process.env.FIN_TOKEN}`)
//       .then((res)=> result.financial = res.data)
//       await Axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${process.env.FIN_TOKEN}`)
//       .then((res) => result.profile = res.data)
//       await Axios.get(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=2020-04-30&to=2020-05-01&token=${process.env.FIN_TOKEN}`)
//       .then((res) => result.news = res.data)
//       await Axios.get(`https://finnhub.io/api/v1 /stock/candle?symbol=${symbol}&resolution=1&from=1605543327&to=1605629727&token=${process.env.FIN_TOKEN}`)
//       .then((res) => result.candles = res.data)
      
//       res.send(result)
//     }
//     catch(err){
//         res.status(500).json({ error: err.message });
//       }
    
// })

router.get("/find/:id", auth, async (req, res) => {
  const quote = await Quote.findOne({ userId: req.user, _id: req.params.id });
  res.json(quote.ticker);
});

router.post("/addWatchlist", auth, async (req, res) => {
  try {
    const { ticker } = req.body;

    //validation
    if (!ticker)
      return res.status(400).json({ msg: "No ticker found" });

    const watchList = new Quote({
      ticker,userId: req.user,
    });
    const savedQuote = await watchList.save();
    res.json(savedQuote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/renderWatchlist", auth, async (req, res) => {
  const quote = await Quote.find({ userId: req.user });
  res.json(quote);
});

router.delete("/deleteWatchList/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    const indexToDelete = user.watchList.indexOf(req.body.userId);

    user.watchList.splice(indexToDelete, 1);

    await user.save();

    res.send(user.watchList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/remove/:id", auth, async (req, res) => {
  const quote = await Quote.findOne({ userId: req.user, _id: req.params.id });
  if (!quote)
    return res
      .status(400)
      .json({ msg: "No quote found with this current user." });
  const deletedQuote = await Quote.findByIdAndDelete(req.params.id);
  res.json(deletedQuote);
});

router.patch("/edit/:id", auth, async (req, res) => {
  const quote = await Quote.findOne({ userId: req.user, _id: req.params.id });

  if (!quote) return res.status(400).json({ msg: "No quote to update." });
  const updateQuote = await Quote.findByIdAndUpdate(req.params.id, req.body);
  res.json(updateQuote);
});

module.exports = router;
