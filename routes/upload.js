const express = require("express");
const router = express.Router();
const dbRouter = require("./queries");
const fs = require("fs");
const path = require("path");

router.get("/", (req, res, next) => {
  res.render("upload", {});
});

// storing the input config file to DB

router.post("/", (req, res, next) => {
  // Check if file has been uploaded
  let data;
  let fpath = path.join(__dirname, "../uploads/config.json");
  if (fs.existsSync(fpath)) {
    data = JSON.parse(fs.readFileSync(fpath, "utf8")).loadMaster[0];
  } else {
    res.status(500).json({ error: "file not found" });
  }
  dbRouter.insertConfig(data, res, next);
});

module.exports = router;
