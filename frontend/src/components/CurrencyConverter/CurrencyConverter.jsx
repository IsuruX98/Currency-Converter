import React, { useState } from "react";
import axios from "axios";
import { Select, Input, Button, message } from "antd";

const { Option } = Select;

const CurrencyConverter = () => {
  const [fromCountry, setFromCountry] = useState("USD");
  const [toCountry, setToCountry] = useState("LKR");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = async () => {
    if (!amount) {
      message.error("Please enter a valid amount.");
      return;
    }
    try {
      const response = await axios.get(`/api/rate`, {
        params: { from: fromCountry, to: toCountry, amount },
      });
      setConvertedAmount(response.data.convertedAmount);
    } catch (error) {
      console.error(error);
      message.error("Conversion failed. Please try again.");
    }
  };

  const handleTransfer = async () => {
    if (!convertedAmount) {
      message.error("Please perform a conversion first.");
      return;
    }
    try {
      await axios.post(`/api/transfer`, {
        fromCountry,
        toCountry,
        amount,
        convertedAmount,
      });
      message.success("Transfer successful!");
    } catch (error) {
      console.error(error);
      message.error("Transfer failed. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white  p-8">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          From Country
        </label>
        <Select
          className="w-full"
          value={fromCountry}
          onChange={(value) => setFromCountry(value)}
        >
          <Option value="USD">USA (USD)</Option>
          <Option value="LKR">Sri Lanka (LKR)</Option>
          <Option value="AUD">Australia (AUD)</Option>
          <Option value="INR">India (INR)</Option>
        </Select>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          To Country
        </label>
        <Select
          className="w-full"
          value={toCountry}
          onChange={(value) => setToCountry(value)}
        >
          <Option value="USD">USA (USD)</Option>
          <Option value="LKR">Sri Lanka (LKR)</Option>
          <Option value="AUD">Australia (AUD)</Option>
          <Option value="INR">India (INR)</Option>
        </Select>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Amount
        </label>
        <Input
          type="number"
          className="w-full"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-4 mb-6">
        <Button type="primary" onClick={handleConvert}>
          Convert
        </Button>
        {convertedAmount && (
          <div className="text-sm text-gray-700">
            Converted Amount: {convertedAmount}
          </div>
        )}
      </div>
      <Button type="primary" block onClick={handleTransfer}>
        Transfer
      </Button>
    </div>
  );
};

export default CurrencyConverter;
