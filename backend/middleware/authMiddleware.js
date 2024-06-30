const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Middleware to protect routes, verifying JWT token
const protect = async (req, res, next) => {
  let token;

  try {
    // Extracting JWT token from Authorization header
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1]; // Extracting the token part
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token"); // Error message for missing token
    }

    // Verifying and decoding JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Finding user by decoded user ID and excluding password field
    req.user = await User.findById(decoded.userId).select("-password");

    if (!req.user) {
      res.status(401);
      throw new Error("Not authorized, user not found"); // Error message for user not found
    }

    next(); // Proceeding to next middleware
  } catch (error) {
    next(error); // Forwarding error to error handling middleware
  }
};

// Middleware to check user roles
const checkRole = (roles) => {
  return (req, res, next) => {
    try {
      // Checking if user exists and has required role
      if (!req.user || !roles.includes(req.user.role)) {
        res.status(403);
        throw new Error(`Not authorized, ${roles.join(" or ")} role required`); // Error message for insufficient role
      }
      next(); // Proceeding to next middleware
    } catch (error) {
      next(error); // Forwarding error to error handling middleware
    }
  };
};

module.exports = {
  protect,
  checkRole,
};
