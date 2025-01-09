const User = require('../models/userModels'); 
const { v4: uuidv4 } = require('uuid');
const { setUser, getUser} = require("../service/auth");

async function handleSignup(req, res) {
  const { name, email, password } = req.body;

  try {
    await User.create({
      name,
      email,
      password,
    });
    return res.redirect("/");
  } 
  catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).send("Internal Server Error");
  }
}


async function handleLogin(req, res) {
  const { email, password } = req.body;

  try{
    const user = await User.findOne({email, password});
    // console.log("User:", user);
    if(!user){
      return res.render("login", {
        error: "Invalid email or password",
      })
    }

    const token = setUser( user);
    res.cookie("uid", token);// it is used to set the cookie(name the cookie, value of the cookie)
    return res.redirect("/");
  }
  catch (error) {
    console.error("Error during login:", error);
    return res.status(500).send("Internal Server Error");
  }
}
module.exports = {
  handleSignup, handleLogin,
};