const express = require('express');
const URL = require('../models/urlModels');
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allURLS = await URL.find({});
    // console.log("Fetched URLs:", allURLS); // Debug log
    
    return res.render("home", {
      urls: allURLS
    });
  } catch (error) {
    console.error("Error fetching URLs:", error);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = router;