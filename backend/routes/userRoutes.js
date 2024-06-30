const express = require("express");
const router = express.Router();
const {
  getUserProfile,
  getUserProfileById,
  getAllProfiles,
  updateUserProfile,
  updateUserProfileById,
  deleteUserById,
  updateUserRoleById,
} = require("../controllers/userController");
const { protect, checkRole } = require("../middleware/authMiddleware");

// Route to get user profile
router.get("/profile", protect, getUserProfile);

// Route to get user profile by ID
router.get("/profile/:id", getUserProfileById);

// Route to get all profiles (Only accessible to admins)
router.get("/allProfiles", protect, checkRole(["admin"]), getAllProfiles);

// Route to update user profile
router.put("/profile", protect, updateUserProfile);

// Route to update user profile by ID
router.put("/profile/:id", protect, updateUserProfileById);

// Route to delete user by ID
router.delete("/profile/:id", protect, deleteUserById);

// Route to update user role by ID
router.put("/update-role/:id", protect, updateUserRoleById);

module.exports = router;
