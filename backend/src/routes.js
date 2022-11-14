const express = require("express");
const router = express.Router();
const { fetchCaseData } = require("./controller");

router.get("/", fetchCaseData);

module.exports = router;
