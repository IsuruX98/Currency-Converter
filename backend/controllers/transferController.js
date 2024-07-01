const axios = require("axios");
const Transfer = require("../models/Transfer");
const User = require("../models/userModel");

exports.getRate = async (req, res) => {
  const { from, to, amount } = req.query;
  try {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGERATE_API_KEY}/latest/${from}`
    );
    const rate = response.data.conversion_rates[to];
    const convertedAmount = rate * amount;
    res.json({ convertedAmount });
  } catch (error) {
    res.status(500).send("Error fetching conversion rate");
  }
};

exports.createTransfer = async (req, res) => {
  const { fromCountry, toCountry, amount, convertedAmount, userId } = req.body;

  try {
    const transfer = new Transfer({
      fromCountry,
      toCountry,
      amount,
      convertedAmount,
      user: userId,
    });
    await transfer.save();
    res.status(201).send("Transfer recorded");
  } catch (error) {
    res.status(500).send("Error recording transfer");
  }
};

exports.getTransfersByUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const transfers = await Transfer.find({ user: userId });
    res.json(transfers);
  } catch (error) {
    res.status(500).send("Error fetching transfers");
  }
};

exports.deleteTransfer = async (req, res) => {
  const transferId = req.params.id;
  const { userId } = req.body;

  try {
    // Ensure only the owner of the transfer can delete it
    const transfer = await Transfer.findOneAndDelete({
      _id: transferId,
      user: userId,
    });

    if (!transfer) {
      return res.status(404).send("Transfer not found or not authorized");
    }

    res.send("Transfer deleted");
  } catch (error) {
    res.status(500).send("Error deleting transfer");
  }
};
