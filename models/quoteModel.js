const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  ticker: { type: String },
  userId: { type: String, required: true },
});

module.exports = Quote = mongoose.model("quote", quoteSchema);
