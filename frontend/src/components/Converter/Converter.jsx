import React from "react";
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter";
import TransferHistory from "../TransferHistory/TransferHistory";

const Converter = () => {
  return (
    <div
      id="converter"
      className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 md:pt-28 pt-2"
    >
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Currency Converter
        </h2>
        <CurrencyConverter />
      </div>
    </div>
  );
};

export default Converter;
