const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;

// create new local strategy object
module.exports = new PassportLocalStrategy(
  {
    // By default, LocalStrategy attempts to find data in username and password POST body properties
    // Here we redefine them a bit
    usernameField: 'login',
    passwordField: 'password',
    // we won't use sessions but tokens thus false for session
    session: false,
  },
  // next we create a new user document
  (login, password, done) => {
    const userData = {
      login: login.trim(),
      password: password.trim(),
    };

    User.create(userData)
      .then(() => done(null))
      .catch(err => done(err));
  },
);
