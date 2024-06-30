const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

// Middleware for authenticating users
const authUser = async (req, res, next) => {
  try {
    const { email, password } = req.body; // Extracting email and password from request body

    // Finding user by email
    const user = await User.findOne({ email });

    // Checking if user exists and password matches
    if (user && (await user.matchPassword(password))) {
      // Generating token for authenticated user
      const token = generateToken(res, user._id);

      // Sending user information in response
      res.status(200).json({
        message: "Login successful",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          mobile: user.mobile,
          role: user.role,
        },
        token: token,
      });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    next(error);
  }
};

// Middleware for registering new users
const registerUser = async (req, res, next) => {
  try {
    const { name, email, mobile, password } = req.body;

    const userExists = await User.findOne({ email }); // Checking if user already exists
    if (userExists) {
      res.status(400).json({ error: "User already exists" });
      throw new Error("User already exists");
    }

    const user = await User.create({
      // Creating new user
      name,
      email,
      mobile,
      password,
    });

    if (user) {
      const token = generateToken(res, user._id); // Generating token for new user

      // Sending user information in response
      res.status(201).json({
        message: "Registration successful",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          mobile: user.mobile,
          role: user.role,
        },
        token: token,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
      throw new Error("Invalid user data");
    }
  } catch (error) {
    next(error); // Forwarding error to error handling middleware
  }
};

// Middleware for logging out user
const logoutUser = async (req, res) => {
  res.clearCookie("jwt"); // Clearing JWT cookie
  res.status(200).json({ message: "logout successfully" });
};

module.exports = {
  authUser,
  registerUser,
  logoutUser,
};
