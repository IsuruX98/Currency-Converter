import React from "react";
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter";
import TransferHistory from "../TransferHistory/TransferHistory";

const Converter = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          Currency Converter
        </h1>
        <CurrencyConverter />
        <h2 className="text-xl font-semibold text-center mt-8 mb-4">
          Transfer History
        </h2>
        <TransferHistory />
      </div>
    </div>
  );
};

export default Converter;
