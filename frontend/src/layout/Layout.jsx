import React from "react";
import Router from "../router/Router";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
};

export default Layout;
