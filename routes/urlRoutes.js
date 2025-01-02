const express = require('express');
const router = express.Router();
const { handleGenerateNewShortUrl, handleGetAnalytics, handleRedirect} = require('../controllers/urlController');

router.post('/', handleGenerateNewShortUrl);
router.get('/analytics/:shortID', handleGetAnalytics);
router.get('/:shortID', handleRedirect);

module.exports = router;