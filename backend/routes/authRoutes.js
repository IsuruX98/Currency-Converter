const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  logoutUser,
} = require("../controllers/authController");

// Route to authenticate a user
router.post("/auth", authUser);

// Route to register a new user
router.post("/register", registerUser);

// Route to logout a user
router.post("/logout", logoutUser);

module.exports = router;
