import React from "react";
import Layout from "./layout/Layout";
import { AuthProvider } from "./context/authContext";
import { BrowserRouter } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ReactNotifications />
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
