import React from "react";
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter";
import TransferHistory from "../TransferHistory/TransferHistory";

const Converter = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 p-6 sm:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Currency Converter */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Currency Converter
            </h2>
            <CurrencyConverter />
          </div>

          {/* Transfer History */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Transfer History
            </h2>
            <TransferHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
