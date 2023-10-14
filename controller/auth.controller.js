const User = require("../model/users.model");

const home = (req, res) => {
  res.render("index");
};


const registerPage = (req, res) => {
  res.render("register");
};


const register = async (req, res) => {
  const { name, email, password, address, PhoneNumber } = req.body;

  if (!password || password.length < 8) {
    return res.status(400).json({ message: "Password should be at least 8 characters" });
  }

  try {
    await User.create({
      name,
      email,
      password,
      address,
      PhoneNumber
    });

 
    res.status(200).json({ message: "User successfully created" });
  } catch (err) {
    
    console.error(err);
    res.status(500).json({ message: "User not successfully created" });
  }
};

module.exports = {
  home,
  registerPage,
  register,
};
