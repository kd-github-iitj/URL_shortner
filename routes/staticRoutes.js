const express = require('express');
const URL = require('../models/urlModels');
const router = express.Router();

router.get("/", async (req, res) => {
  try {

    if(!req.user) return res.redirect("/login");

    const allURLS = await URL.find({ createdBY: req.user._id });
    // console.log("Fetched URLs:", allURLS); // Debug log

    return res.render("home", {
      urls: allURLS
    });
  } 
  catch (error) {
    console.error("Error fetching URLs:", error);
    return res.status(500).send("Internal Server Error");
  }
});

router.get("/signup", (req, res) =>{
  return res.render("signup");
});
router.get("/login", (req, res) =>{
  return res.render("login");
});

module.exports = router;