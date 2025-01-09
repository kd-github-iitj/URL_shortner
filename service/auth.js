const sessionIdtoUserMpp = new Map();

function setUser(id, user){
  sessionIdtoUserMpp.set(id, user);
}

function getUser(id){
  return sessionIdtoUserMpp.get(id);
}


module.exports = {
  setUser,
  getUser,
};