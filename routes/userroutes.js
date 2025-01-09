const express = require('express');
const { handleSignup, handleLogin} = require('../controllers/userControllers');
 

const router = express.Router();

router.post("/", handleSignup);
router.post("/login", handleLogin);


module.exports = router; // not it is exported as a function