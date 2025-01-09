const { getUser } = require("../service/auth");

async function restrictToLoggedinOnly(req, res, next) {
  const userUid = req.cookies?.uid;

  if (!userUid) return res.redirect("/login");
  const user = getUser(userUid);
  console.log(user);
  if (!user) return res.redirect("/login");

  req.user = user; // wow practice
  next();
}

async function checkAuth(req, res, next){
  const userUid = req.cookies?.uid;
  const user = getUser(userUid);
  req.user = user; // wow practice
  next();
}

module.exports = {
  restrictToLoggedinOnly,
  checkAuth
}