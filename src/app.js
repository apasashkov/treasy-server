const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const passport = require('passport');
// const seedDb = require('./seeds.js');

const app = express();

app.use(cors());

// mongoose config
mongoose.Promise = Promise;
const url = process.env.DATABASEURL || 'mongodb://localhost/treasy';
mongoose.connect(url, {
  useMongoClient: true,
});
require('./models/user');

// // seeding DB with dummy data
// seedDb();

app.use(bodyParser.json());

// using passport middleware
app.use(passport.initialize());
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');

passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// adding routes
const authRoutes = require('./routes/authRoutes');
const cardRoutes = require('./routes/cardRoutes');
const groupRoutes = require('./routes/groupRoutes');

app.use(authRoutes);
app.use(cardRoutes);
app.use(groupRoutes);

app.listen(process.env.PORT || 8000, () => (console.log('Running on port 8000')));
