const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./src/routes/books/bookRoutes'); // Import bookRouter
require('./db');

const app = express();
app.use(bodyParser.json());

// Mounting bookRouter at /books/search path
app.use('/books/search', bookRouter);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
