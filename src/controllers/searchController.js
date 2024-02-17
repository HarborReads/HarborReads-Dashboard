// controllers/searchController.js

const axios = require('axios');
const SearchHistory = require('../models/SearchHistory');

async function searchBooks(req, res) {
  const { userId, title } = req.body;

  try {
    if (!userId || !title) {
      return res.status(400).json({ error: 'Missing required fields: userId, title' });
    }

    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: { q: `intitle:${title}` }
    });

    const books = response.data.items.map(item => ({
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      // Add other relevant book information here
    }));

    // Store search history in the database
    await SearchHistory.create({ userId, query: title });

    res.json(books);
  } catch (error) {
    console.error('Error searching books:', error);
    res.status(500).json({ error: 'An error occurred while searching books.' });
  }
}

module.exports = {
  searchBooks
};
