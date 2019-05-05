var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Opex Packing",
    subtitle: "Enjoy building charts",
    link: "/upload",
    linktext: "Upload config file"
  });
});

module.exports = router;
