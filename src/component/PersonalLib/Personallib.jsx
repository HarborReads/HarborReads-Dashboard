import React, { useState, useEffect } from 'react';
import BookInfo from './bookContainers';
import { FaTimes } from 'react-icons/fa'; // Import the "X" icon
function Personallib({ currentSession }) {
  const [shelves, setShelves] = useState([]);
  const [shelfName, setShelfName] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeShelf, setActiveShelf] = useState(null);
  const userId = currentSession.user.id;

  useEffect(() => {
    fetchUserShelves();
  }, [shelves]);

  const fetchUserShelves = () => {
    fetch(`http://localhost:3001/library/shelves`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId })
    })
    .then(response => response.json())
    .then(response => {
      const { shelves, defaultShelf } = response;
      
      // Check if the default shelf exists in the shelves array
      const defaultShelfExists = defaultShelf && shelves.some(shelf => shelf._id === defaultShelf._id);

      // If the default shelf is not deleted and not already in the shelves array, add it
      const updatedShelves = defaultShelfExists && defaultShelf
        ? shelves
        : [...shelves, defaultShelf];
      setShelves(updatedShelves);
    })
    .catch(error => console.error('Error fetching user shelves:', error));
  };

  const handleAddShelf = () => {
    if (shelfName.trim() !== '') {
      fetch(`http://localhost:3001/library/addShelf`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, shelfName })
      })
      .then(response => response.json())
      .then(() => {
        setShelves([...shelves, { name: shelfName, books: [] }]);
        setShelfName('');
      })
      .catch(error => console.error('Error adding shelf:', error));
    }
  };

  const handleRemoveShelf = (index) => {
    const shelfId = shelves[index]._id;
    fetch(`http://localhost:3001/library/removeShelf`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, shelfId })
    })
    .then(response => response.json())
    .then(() => {
      const newShelves = [...shelves];
      newShelves.splice(index, 1);
      setShelves(newShelves);
    })
    .catch(error => console.error('Error removing shelf:', error));
  };

  const handleUpdateBookState = (shelfIndex, bookToUpdate, newState) => {
    const updatedShelves = shelves.map((shelf, index) => {
      if (index === shelfIndex) {
        return {
          ...shelf,
          books: shelf.books.map(book => {
            if (book === bookToUpdate) {
              return {
                ...book,
                state: newState
              };
            }
            return book;
          })
        };
      }
      return shelf;
    });
    setShelves(updatedShelves);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const filterBooksByShelf = (shelfName) => {
    let filteredBooks = [];
    shelves.forEach((shelf) => {
      if (shelf && shelf.name === shelfName || shelfName === 'All') {
        if (Array.isArray(shelf.books)) {
          filteredBooks = [...filteredBooks, ...shelf.books];
        }
      }
    });
    
    if (selectedFilter !== 'All') {
      filteredBooks = filteredBooks.filter((book) => book.state === selectedFilter);
    }
    return filteredBooks;
  };

  const handleShelfClick = (shelf) => {
    setActiveShelf(shelf);
  };

  return (
    <div>
      <div className="mb-1">
        <h1 className='text-3xl font-medium text-black mb-12'>Personal Library</h1>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 items-center">
        <div className="flex items-center">
          <input
            className='text-black bg-gray-200 rounded-2xl mr-2 pl-2 py-1 w-1/3'
            placeholder='Enter your new shelf name'
            value={shelfName}
            onChange={(e) => setShelfName(e.target.value)}
          />
          <button
            className='text-white bg-brown rounded w-45 ml-2 mr-2 px-2 py-1'
            onClick={handleAddShelf}
          > 
            Add Shelf
          </button>
          <select
            className='text-black bg-gray-200 rounded-2xl pl-2 pr-4 py-1 ml-2'
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Read">Read</option>
            <option value="Currently Reading">Currently Reading</option>
            <option value="Want to Read">Want to Read</option>
          </select>
        </div>
        <div className="mt-4 flex justify-center">
          {shelves.map((shelf, shelfIndex) => (
            <div
              key={shelfIndex}
              className={`cursor-pointer rounded-lg p-2 mx-2 ${
                activeShelf === shelf ? 'bg-brown text-white' : 'bg-gray-200 text-black'
              }`}
              onClick={() => handleShelfClick(shelf)}
            >
              {shelf.name}
            </div>
          ))}
        </div>
        <div className="mt-4 pr-1">
          {activeShelf && (
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold mb-2">{activeShelf.name}</h2>
                <button
                  className="text-sm bg-red-500 text-white px-2 py-1 rounded-md mb-2"
                  onClick={() => handleRemoveShelf(shelves.indexOf(activeShelf))}
                >
                 <FaTimes /> {/* Use the "X" icon */}
                </button>
              </div>
              <div className="flex flex-wrap">
                {filterBooksByShelf(activeShelf.name).map((book, bookIndex) => (
                  <div key={bookIndex} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-">
                    <BookInfo
                      bookId={book}
                      shelf={activeShelf}
                      userId={userId}
                      setShelves={setShelves}
                      onUpdateState={(newState) => handleUpdateBookState(shelves.indexOf(activeShelf), book, newState)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Personallib;
