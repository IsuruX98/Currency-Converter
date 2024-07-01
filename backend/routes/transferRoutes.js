const express = require("express");
const transferController = require("../controllers/transferController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/rate", transferController.getRate);
router.post("/transfer", protect, transferController.createTransfer);
router.get(
  "/transfers/:userId",
  protect,
  transferController.getTransfersByUser
);
router.delete("/transfer/:id", protect, transferController.deleteTransfer);

module.exports = router;
