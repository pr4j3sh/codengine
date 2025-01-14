const express = require("express");
const { check } = require("../controllers/healthController");

const router = express.Router();

router.route("/").post(check);

module.exports = router;
