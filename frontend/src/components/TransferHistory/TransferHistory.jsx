import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { List, Button, Card, Popconfirm, message } from "antd";

const TransferHistory = () => {
  const [transfers, setTransfers] = useState([]);

  const fetchTransfers = async () => {
    try {
      const response = await axios.get(`transfers`);
      setTransfers(response.data);
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch transfer history.");
    }
  };

  const handleRevoke = async (id) => {
    try {
      await axios.delete(`transfer/${id}`);
      fetchTransfers();
      message.success("Transfer revoked successfully.");
    } catch (error) {
      console.error(error);
      message.error("Failed to revoke transfer.");
    }
  };

  useEffect(() => {
    fetchTransfers();
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-white p-8">
      <List
        dataSource={transfers}
        renderItem={(transfer) => (
          <List.Item>
            <Card className="w-full">
              <p className="text-gray-800">
                <strong>From:</strong> {transfer.fromCountry} <br />
                <strong>To:</strong> {transfer.toCountry} <br />
                <strong>Amount:</strong> {transfer.amount} <br />
                <strong>Converted:</strong> {transfer.convertedAmount}
              </p>
              <Popconfirm
                title="Are you sure to revoke this transfer?"
                onConfirm={() => handleRevoke(transfer._id)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" danger className="mt-4">
                  Revoke
                </Button>
              </Popconfirm>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TransferHistory;
