const passport = require('passport');

// payload - HTTP body message
// the function returns the boolean validation result, errors and message for the form
const validateSignupForm = (payload) => {
  const errors = {};
  let isFormValid = true;
  let message = '';
  if (!payload || typeof payload.login !== 'string') {
    isFormValid = false;
    errors.login = 'Please provide a correct login.';
  }
  // case for limiting the number of password characters
  //   if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 5) {
  //     isFormValid = false;
  //     errors.password = 'Password must have at least 5 characters.';
  //   }
  if (!isFormValid) {
    message = 'Check the form for errors.';
  }
  return {
    success: isFormValid,
    message,
    errors,
  };
};

const validateLoginForm = (payload) => {
  const errors = {};
  let isFormValid = true;
  let message = '';
  if (!payload || typeof payload.login !== 'string' || payload.login.trim().length === 0) {
    isFormValid = false;
    errors.login = 'Please provide your login.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password.';
  }
  if (!isFormValid) {
    message = 'Check the form for errors.';
  }
  return {
    success: isFormValid,
    message,
    errors,
  };
};

const authController = {};

authController.register = (req, res, next) => {
  const validationResult = validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    });
  }

  return passport.authenticate('local-signup', (err) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // the 11000 Mongo code is for a duplication login error
        // the 409 HTTP status code is for conflict error
        return res.status(409).json({
          success: false,
          message: 'Check the form for errors.',
          errors: {
            login: 'This login is already taken.',
          },
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.',
      });
    }

    // login after register
    return passport.authenticate('local-login', (error, token) => {
      if (error) {
        if (error.name === 'IncorrectCredentialsError') {
          return res.status(400).json({
            success: false,
            message: err.message,
          });
        }

        return res.status(400).json({
          success: false,
          message: 'Could not process the form.',
        });
      }

      return res.json({
        success: true,
        message: 'You have successfully logged in!',
        token,
      });
    })(req, res, next);

    // return res.status(200).json({
    //   success: true,
    //   message: 'You have successfully signed up! Now you can log in.',
    // });
  })(req, res, next);
};

authController.login = (req, res, next) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    });
  }

  return passport.authenticate('local-login', (err, token) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.',
      });
    }

    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
    });
  })(req, res, next);
};

module.exports = authController;
