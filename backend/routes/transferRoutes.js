// server/routes/transferRoutes.js
const express = require("express");
const transferController = require("../controllers/transferController");
const router = express.Router();

router.get("/rate", transferController.getRate);
router.post("/transfer", transferController.createTransfer);
router.get("/transfers", transferController.getTransfers);
router.delete("/transfer/:id", transferController.deleteTransfer);

module.exports = router;
