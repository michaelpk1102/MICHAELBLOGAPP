const { createUser } = require("../service/auth.controller");

const home = (req, res) => {
  res.render("index");
};

const register = (req, res) => {
  res.render("register", { title: "Register" });
};

const registerPage = (req, res) => {
  const { name, email, password, address, phoneNumber } = req.body;
  createUser(name, email, password, address, phoneNumber);
  res.redirect("/register");
};

module.exports = {
  home,
  register,
  registerPage
};
