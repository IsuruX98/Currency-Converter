// src/components/TransferHistory.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const TransferHistory = () => {
  const [transfers, setTransfers] = useState([]);

  const fetchTransfers = async () => {
    try {
      const response = await axios.get(`/api/transfers`);
      setTransfers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRevoke = async (id) => {
    try {
      await axios.delete(`/api/transfer/${id}`);
      fetchTransfers();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTransfers();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
      <h2 className="text-xl font-semibold mb-4">Transfer History</h2>
      {transfers.map((transfer) => (
        <div key={transfer._id} className="border-b py-2">
          <p>
            From: {transfer.fromCountry}, To: {transfer.toCountry}, Amount:{" "}
            {transfer.amount}, Converted: {transfer.convertedAmount}
          </p>
          <button
            className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 mt-2"
            onClick={() => handleRevoke(transfer._id)}
          >
            Revoke
          </button>
        </div>
      ))}
    </div>
  );
};

export default TransferHistory;
