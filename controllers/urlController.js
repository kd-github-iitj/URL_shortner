const shortID = require("shortid");
const URL = require("../models/urlModels"); // Import the URL model
const shortid = require("shortid");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const shortID = shortid(8);
  await URL.create({
    shortID: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

async function handleGetAnalytics(req, res) {
  const shortID = req.params.shortID;
  const result = await URL.findOne({ shortID });
  return res.json({
    total_clicks: result.visitHistory.length,
    anlytics: result.visitHistory,
  });
}

async function handleRedirect(req, res) {
  const shortId = req.params.shortID;

  try {
    const result = await URL.findOneAndUpdate(
      { shortID: shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (!result) {
      return res.status(404).send("URL not found");
    }

    res.redirect(result.redirectURL);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

// async function handle

module.exports = { handleGenerateNewShortUrl, handleGetAnalytics, handleRedirect };
