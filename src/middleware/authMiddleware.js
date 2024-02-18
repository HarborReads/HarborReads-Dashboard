const session = require('express-session');
const crypto = require('crypto');

// Generate a random secret key
const secretKey = crypto.randomBytes(32).toString('hex');

const authenticateUser = session({
  secret: secretKey,
  resave: false,
  saveUninitialized: false
});

module.exports = { authenticateUser, secretKey };

