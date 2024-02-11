//Main entry point of the application
//This file initializes the Express app, sets up middleware, defines routes, and configures the server. 
//It typically contains code to start the server and listen for incoming requests.

const express = require('express');
const bookRouter = require('./src/routes/books/bookRoutes.js'); // Import your bookroute.js file
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON request bodies
app.use(express.json());

// Mount the bookRouter to handle requests to '/books'
app.use('/books', bookRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
