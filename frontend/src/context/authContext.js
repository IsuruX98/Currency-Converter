import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "../api/axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchUserById = async (userId) => {
    try {
      const response = await axios.get(`user/profile/${userId}`);
      const userData = response.data;
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user profile:", error.response.data);
    } finally {
      setAuthLoading(false); // Set loading to false once user data is fetched or error occurs
    }
  };

  useEffect(() => {
    const jwtToken = Cookies.get("jwt");
    const userIsLoggedIn = jwtToken ? true : false;
    setIsLoggedIn(userIsLoggedIn);

    if (userIsLoggedIn) {
      const decodedToken = jwtDecode(jwtToken);
      const userId = decodedToken.userId;
      fetchUserById(userId);
    } else {
      setAuthLoading(false); // If user is not logged in, set loading to false
    }
  }, []);

  const login = async (formData) => {
    try {
      const response = await axios.post("auth/auth", formData);
      Cookies.set("jwt", response.data.token, {
        expires: 30,
      });
      setIsLoggedIn(true);
      setUser(response.data.user);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response.data.error };
    }
  };

  const register = async (formData) => {
    try {
      const response = await axios.post("auth/register", formData);
      Cookies.set("jwt", response.data.token, {
        expires: 30,
      });
      setIsLoggedIn(true);
      setUser(response.data.user);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response.data.error };
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    Cookies.remove("jwt");
    return { success: true, message: "logout successfully" };
  };

  return (
    <AuthContext.Provider
      value={{ user, authLoading, isLoggedIn, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
