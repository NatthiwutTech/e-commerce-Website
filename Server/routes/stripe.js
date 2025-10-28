const express = require("express");
const { authCheck } = require("../middlewares/authCheck");
const router = express.Router();

const { payment } = require("../controllers/stripe");

router.post("/user/create-payment-intent", authCheck, payment);

module.exports = router;
