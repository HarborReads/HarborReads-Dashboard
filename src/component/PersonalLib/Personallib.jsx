import React, { useState, useEffect } from 'react';
import data from '../search/TemplateData.json';

function Personallib() {
  const [shelves, setShelves] = useState([]);
  const [shelfName, setShelfName] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All'); // Default value for the dropdown

  // Load shelves from local storage on component mount or page reload
  useEffect(() => {
    const savedShelves = localStorage.getItem('shelves');
    if (savedShelves) {
      setShelves(JSON.parse(savedShelves));
    }
  }, []);

  const handleAddShelf = () => {
    if (shelfName.trim() !== '') {
      const newShelves = [...shelves, { name: shelfName, books: [] }];
      setShelves(newShelves);
      // Update local storage with the new shelves data
      localStorage.setItem('shelves', JSON.stringify(newShelves));
      setShelfName(''); // Clear the input field
    }
  };

  const handleRemoveShelf = (index) => {
    const newShelves = shelves.filter((shelf, i) => i !== index);
    setShelves(newShelves);
    // Update local storage with the modified shelves
    localStorage.setItem('shelves', JSON.stringify(newShelves));
  };

  const filterBooksByShelf = (shelfName) => {
    let filteredBooks = data;
    if (shelfName !== 'All') {
      filteredBooks = filteredBooks.filter(book => book.shelf === shelfName);
      if (selectedFilter !== 'All') {
        filteredBooks = filteredBooks.filter(book => book.status === selectedFilter);
      }
    } else {
      if (selectedFilter !== 'All') {
        filteredBooks = filteredBooks.filter(book => book.status === selectedFilter);
      }
    }
    return filteredBooks;
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-start">
        <div className="my-3">
          <h1 className='text-3xl md:text-5xl font-medium text-black'>Personal Library</h1>
        </div>
        <div className="mt-5 flex">
          <input
            className='text-black bg-gray-200 rounded-2xl mr-2 pl-2'
            placeholder='Add a Shelf'
            value={shelfName}
            onChange={(e) => setShelfName(e.target.value)}
          />
          <button
            className='text-black text-base bg-blue-500 rounded-xl w-16 mr-2'
            onClick={handleAddShelf}
          >
            Add
          </button>
          <select
            className='text-black bg-gray-200 rounded-2xl pl-2 pr-4'
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Read">Read</option>
            <option value="Currently Reading">Currently Reading</option>
            <option value="Want to Read">Want to Read</option>
          </select>
        </div>
        <div>
          {shelves.map((shelf, index) => (
            <div key={index} className="mt-5">
              <h2 className="text-xl font-semibold">{shelf.name}</h2>
              <button
                className="text-sm bg-red-500 text-white px-2 py-1 rounded-md mt-1"
                onClick={() => handleRemoveShelf(index)}
              >
                Remove
              </button>
              <div className="flex flex-wrap">
                {filterBooksByShelf(shelf.name).map((book, bookIndex) => (
                  <div key={bookIndex} className="border border-gray-300 rounded-lg p-2 m-2">
                    <img src={book.image} alt={book.title} className="w-24 h-32" />
                    <p className="text-sm">{book.title}</p>
                    {/* You can add more details here */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Personallib;
