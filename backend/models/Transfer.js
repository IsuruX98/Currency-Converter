// server/models/Transfer.js
const mongoose = require("mongoose");

const TransferSchema = new mongoose.Schema({
  fromCountry: String,
  toCountry: String,
  amount: Number,
  convertedAmount: Number,
});

module.exports = mongoose.model("Transfer", TransferSchema);
