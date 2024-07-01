import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { List, Button, Popconfirm, message, Modal } from "antd";
import { formatDistanceToNow } from "date-fns";

const TransferHistory = ({ modalVisible, closeModal, userId }) => {
  const [transfers, setTransfers] = useState([]);

  const fetchTransfers = async () => {
    try {
      const response = await axios.get(`/transfers/${userId}`); // Fetch transfers for the specific user
      setTransfers(response.data);
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch transfer history.");
    }
  };

  const handleRevoke = async (id) => {
    try {
      await axios.delete(`/transfer/${id}`, {
        data: { userId: userId },
      });
      fetchTransfers();
      message.success("Transfer revoked successfully.");
    } catch (error) {
      console.error(error);
      message.error("Failed to revoke transfer.");
    }
  };

  useEffect(() => {
    if (modalVisible) {
      fetchTransfers();
    }
  }, [modalVisible]);

  return (
    <Modal
      title="Transfer History"
      visible={modalVisible}
      onCancel={closeModal}
      footer={null}
      width={800}
      bodyStyle={{ maxHeight: "60vh", overflowY: "auto" }}
    >
      <div className="max-w-4xl mx-auto">
        <List
          itemLayout="vertical"
          size="large"
          dataSource={transfers}
          renderItem={(transfer) => (
            <List.Item
              key={transfer._id}
              className="border-b border-gray-200 px-4 py-4"
            >
              <div className="flex justify-between">
                <div className="flex-1">
                  <p className="text-gray-800 mb-2">
                    <strong>From:</strong> {transfer.fromCountry}
                  </p>
                  <p className="text-gray-800 mb-2">
                    <strong>To:</strong> {transfer.toCountry}
                  </p>
                  <p className="text-gray-800 mb-2">
                    <strong>Amount:</strong> {transfer.amount}
                  </p>
                  <p className="text-gray-800 mb-2">
                    <strong>Converted:</strong> {transfer.convertedAmount}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Created{" "}
                    {formatDistanceToNow(new Date(transfer.createdAt), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
                <div>
                  <Popconfirm
                    title="Are you sure to revoke this transfer?"
                    onConfirm={() => handleRevoke(transfer._id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button type="primary" danger size="small">
                      Revoke
                    </Button>
                  </Popconfirm>
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </Modal>
  );
};

export default TransferHistory;
