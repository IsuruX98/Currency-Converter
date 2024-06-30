import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { AiOutlineClose } from "react-icons/ai";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import {
  SuccessNotification,
  ErrorNotification,
} from "../../notifications/notifications";

const AuthModal = ({ isOpen, onClose, mode }) => {
  const [isLogin, setIsLogin] = useState(mode === "login");
  const { register, login } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        const response = await login(formData);
        if (response.success) {
          SuccessNotification("Logged in successfully");
          onClose();
        } else {
          ErrorNotification(response.error);
        }
      } else {
        if (!validateFormData()) {
          setLoading(false);
          return;
        }
        const response = await register(formData);
        if (response.success) {
          SuccessNotification("Registered successfully");
          onClose();
        } else {
          ErrorNotification(response.error);
        }
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
    } finally {
      setLoading(false);
    }
  };

  const validateFormData = () => {
    const { name, email, mobile, password, confirmPassword } = formData;

    if (!isLogin && password !== confirmPassword) {
      ErrorNotification("Passwords do not match");
      return false;
    }

    if (!name.trim()) {
      ErrorNotification("Name is required");
      return false;
    }

    if (!email.trim()) {
      ErrorNotification("Email is required");
      return false;
    } else if (!isValidEmail(email)) {
      ErrorNotification("Invalid email address");
      return false;
    }

    if (!mobile.trim()) {
      ErrorNotification("Mobile is required");
      return false;
    } else if (!isValidMobile(mobile)) {
      ErrorNotification("Invalid mobile number");
      return false;
    }

    return true;
  };

  const isValidEmail = (email) => {
    // Basic email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidMobile = (mobile) => {
    // Basic mobile number validation (10 digits)
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <div>
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  {isLogin ? "Login" : "Register"}
                </h2>
                <button onClick={onClose}>
                  <AiOutlineClose className="text-black" />
                </button>
              </div>

              {loading ? (
                <LoadingSpinner />
              ) : (
                <>
                  {isLogin ? (
                    <LoginForm
                      onSubmit={handleSubmit}
                      formData={formData}
                      onChange={handleChange}
                    />
                  ) : (
                    <RegisterForm
                      onSubmit={handleSubmit}
                      formData={formData}
                      onChange={handleChange}
                    />
                  )}

                  <p className="text-black mt-4">
                    {isLogin
                      ? "Don't have an account?"
                      : "Already have an account?"}
                    <button
                      onClick={handleToggle}
                      className="text-black ml-1 underline"
                    >
                      {isLogin ? "Register" : "Login"}
                    </button>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModal;
