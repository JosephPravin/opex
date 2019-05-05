const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res, next) => {
  res.render("chart", { data: "a" });
});

module.exports = router;
