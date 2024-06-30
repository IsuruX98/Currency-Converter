// server/controllers/transferController.js
const axios = require("axios");
const Transfer = require("../models/Transfer");

exports.getRate = async (req, res) => {
  const { from, to, amount } = req.query;
  try {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/f2016171eae115082f4d8ebd/latest/${from}`
    );
    const rate = response.data.conversion_rates[to];
    const convertedAmount = rate * amount;
    res.json({ convertedAmount });
  } catch (error) {
    res.status(500).send("Error fetching conversion rate");
  }
};

exports.createTransfer = async (req, res) => {
  const { fromCountry, toCountry, amount, convertedAmount } = req.body;
  try {
    const transfer = new Transfer({
      fromCountry,
      toCountry,
      amount,
      convertedAmount,
    });
    await transfer.save();
    res.status(201).send("Transfer recorded");
  } catch (error) {
    res.status(500).send("Error recording transfer");
  }
};

exports.getTransfers = async (req, res) => {
  try {
    const transfers = await Transfer.find();
    res.json(transfers);
  } catch (error) {
    res.status(500).send("Error fetching transfers");
  }
};

exports.deleteTransfer = async (req, res) => {
  try {
    await Transfer.findByIdAndDelete(req.params.id);
    res.send("Transfer deleted");
  } catch (error) {
    res.status(500).send("Error deleting transfer");
  }
};
