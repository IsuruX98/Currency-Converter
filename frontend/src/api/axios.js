import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "https://currency-converter-z1v6.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to add the Bearer token to each request
instance.interceptors.request.use(
  (config) => {
    // Get the JWT token from cookies
    const token = Cookies.get("jwt");
    // If the token exists, add it to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
