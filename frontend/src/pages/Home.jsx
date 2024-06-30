import React from "react";
//import { useAuth } from "../context/authContext";
import Hero from "../components/Hero/Hero";
import Converter from "../components/Converter/Converter";

const Home = () => {
  //const { user, isLoggedIn } = useAuth();

  // if (!isLoggedIn) {
  //   // If user is already logged in, redirect to home page
  //   navigate("/login");
  // }

  return (
    <div>
      <Hero />
      <Converter />
    </div>
  );
};

export default Home;
