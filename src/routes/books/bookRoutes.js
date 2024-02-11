//These files define the HTTP endpoints and their corresponding controller actions using Express Router.
//They organize routes based on functionality and separate concerns by delegating route logic to the appropriate controller functions.

const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

router.get('/books/search', async (req, res) => {
  const { title } = req.query;
  
  try {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: `intitle:${title}`,
        key: GOOGLE_BOOKS_API_KEY
      }
    });

    const books = response.data.items.map(item => ({
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      // Add other relevant book information here
    }));

    res.json(books);
  } catch (error) {
    console.error('Error searching books:', error);
    res.status(500).json({ error: 'An error occurred while searching books.' });
  }
});

module.exports = router;

