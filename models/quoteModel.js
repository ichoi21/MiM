const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  ticker: { type: String },
  name: { type: String },
  last: { type: Number },
  high: { type: Number},
  low: { type: Number },
  userId: { type: String, required: true },
});

module.exports = Quote = mongoose.model("quote", quoteSchema);
