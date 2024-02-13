const express = require('express');
const app = express();
const bookRouter = require('./src/routes/books/bookRoutes'); // Import bookRouter
const { connectToDb, getDb } = require('./db'); // Import connectToDb and getDb functions from db.js

// Middleware to parse JSON request bodies
app.use(express.json());

// Mounting bookRouter at /books/search path
app.use('/books/search', bookRouter);

// Connect to MongoDB database
connectToDb((err) => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    // Handle the error appropriately, e.g., by exiting the application
    process.exit(1);
  }
  console.log('Connected to MongoDB successfully');
});

// Example route to test the database connection
app.get('/', (req, res) => {
  const db = getDb();
  // Perform database operations using db instance
  res.send('Hello World! Database connection is working.');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
