const router = require("express").Router();
const Axios = require("axios");

router.post("/quote", async (req,res) => {
    try{
        let result = {}
        let symbol = req.body.symbol
      await Axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=bv17naf48v6p0f6icqr0`)
      .then((res) => result = res.data)
      res.send(result)
    }
    catch(err){
        res.status(500).json({ error: err.message });
      }
    
})

module.exports = router;