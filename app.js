const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const { authenticateUser, secretKey } = require('./src/middleware/authMiddleware');
const authRoutes = require('./src/routes/auth');
const bookRouter = require('./src/routes/books/bookRoutes');
const profileRouter = require('./src/routes/profileRoutes');
require('./db');

const app = express();

// Session middleware configuration
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: false
}));

// Middleware
app.use(bodyParser.json());

// Mounting authentication routes at /auth base URL
app.use('/auth', authRoutes);

// Mounting protected routes
app.use('/protected', authenticateUser, require('./src/routes/protected/protectedRoutes'));

// Mounting bookRouter at /books/search path
app.use('/books/search', bookRouter);

// Mounting profileRouter at /profile
app.use('/profile', authenticateUser, profileRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
