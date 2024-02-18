//app.js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session'); // Import express-session module
const { authenticateUser, secretKey } = require('./src/middleware/authMiddleware');
const authRoutes = require('./src/routes/auth');
const bookRouter = require('./src/routes/books/bookRoutes');
require('./db');

const app = express();

// Middleware
app.use(bodyParser.json());

// Mounting authentication routes at /auth base URL
app.use('/auth', authRoutes);

// Mounting protected routes
app.use('/protected', authenticateUser, require('./src/routes/protected/protectedRoutes'));

// Mounting bookRouter at /books/search path
app.use('/books/search', bookRouter);

// Session middleware configuration
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: false
}));

// Protected route
app.get('/protected', authenticateUser, (req, res) => {
  if (req.session.user) {
    res.json({ message: 'This is a protected route', user: req.session.user });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
