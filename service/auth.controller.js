const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../model/users.model");
const passport = require("passport");
const LocalStrategy = require('passport-local');

// Passport Local Strategy
passport.use(new LocalStrategy({
  usernameField: "email"
}, (email, password, done) => {
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return done(null, false, { message: "Incorrect Email. Please try again." });
      }

      user.comparePassword(password)
        .then(passwordMatch => {
          if (!passwordMatch) {
            return done(null, false, { message: "Incorrect Password" });
          }
          return done(null, user);
        })
        .catch(err => done(err));
    })
    .catch(err => done(err));
}));

// Serialize User
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Deserialize User
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => done(err));
});

// Function to Create a User
const createUser = (name, email, password,address, phone)=>{
  bcrypt.genSalt(10, (err, salt)=> {
    bcrypt.hash(password, salt,(err, hash)=>{
      const user = new User({
        name: name,
        email: email,
        password: hash,
        address:address,
        phone:phone
      })
      user
        .save()
        .then(() => {
          console.log("User created succefully");
        })
        .catch((err) => {
          console.error(err);
        });
    });
  });

};

module.exports = {
  createUser
};
