const mongoose = require("mongoose");

const TransferSchema = new mongoose.Schema(
  {
    fromCountry: String,
    toCountry: String,
    amount: Number,
    convertedAmount: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transfer", TransferSchema);
