// src/components/CurrencyConverter.js
import React, { useState } from "react";
import axios from "axios";

const CurrencyConverter = () => {
  const [fromCountry, setFromCountry] = useState("USD");
  const [toCountry, setToCountry] = useState("LKR");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = async () => {
    try {
      const response = await axios.get(`/api/rate`, {
        params: { from: fromCountry, to: toCountry, amount },
      });
      setConvertedAmount(response.data.convertedAmount);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTransfer = async () => {
    try {
      await axios.post(`/api/transfer`, {
        fromCountry,
        toCountry,
        amount,
        convertedAmount,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          From Country
        </label>
        <select
          className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
          value={fromCountry}
          onChange={(e) => setFromCountry(e.target.value)}
        >
          <option value="USD">USA</option>
          <option value="LKR">Sri Lanka</option>
          <option value="AUD">Australia</option>
          <option value="INR">India</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          To Country
        </label>
        <select
          className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
          value={toCountry}
          onChange={(e) => setToCountry(e.target.value)}
        >
          <option value="USD">USA</option>
          <option value="LKR">Sri Lanka</option>
          <option value="AUD">Australia</option>
          <option value="INR">India</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          type="number"
          className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleConvert}
        >
          Convert
        </button>
        {convertedAmount && (
          <div className="text-sm text-gray-700">
            Converted Amount: {convertedAmount}
          </div>
        )}
      </div>
      <button
        className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        onClick={handleTransfer}
      >
        Transfer
      </button>
    </div>
  );
};

export default CurrencyConverter;
