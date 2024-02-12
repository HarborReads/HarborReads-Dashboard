const express = require('express');
const app = express();
const bookRouter = require('./src/routes/books/bookRoutes'); // Import bookRouter

// Middleware to parse JSON request bodies
app.use(express.json());

// Mounting bookRouter at /books/search path
app.use('/books/search', bookRouter);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
