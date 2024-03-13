import React, { useState, useEffect } from 'react';

function BookInfo({ bookId, shelf, onUpdateState, userId, setShelves }) {
  const [bookDetails, setBookDetails] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/library/book/${bookId}`)
      .then(response => response.json())
      .then(details => {
        setBookDetails(details);
      })
      .catch(error => {
        console.error('Error fetching book details:', error);
      });
  }, [bookId,bookDetails]);

  const handleChangeStateClick = () => {
    setShowDropdown(true);
  };

  const handleRemoveBookFromShelf = (shelfIndex, bookToRemoveId, setShelves) => {
    // Send request to backend to remove the book from the shelf
    fetch(`http://localhost:3001/library/removeBookFromShelf`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, shelfIndex, bookToRemoveId })
    })
      .then(response => response.json())
      .then(response => {
        const { shelves, defaultShelf } = response;
        const updatedShelves = [...shelves, defaultShelf];
        setShelves(updatedShelves);
      })
      .catch(error => console.error('Error removing book from shelf:', error));
  };


  const handleChangeState = () => {
    setShowDropdown(false);
    onUpdateState(selectedState);
    fetch(`http://localhost:3001/library/changeStatus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ bookId, newState: selectedState })
    })
      .then(response => response.json())
      .then(response => {
        console.log('Book status updated:', response);
        setBookDetails(response);
      })
      .catch(error => console.error('Error changing book status:', error));
  };

  return (
    <div className="flex-none w-56 m-4 p-4 rounded-md shadow bg-white">
      <img src={bookDetails?.imageUrl} alt={bookDetails?.title} className="h-48 w-full object-cover" />
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{bookDetails?.title}</h3>
        <p className="text-gray-600">by {bookDetails?.author && bookDetails?.author.join(', ')}</p>
        <p className="text-gray-600">Genre: {bookDetails?.genre && bookDetails?.genre[0]}</p>
        {bookDetails?.publishedDate && <p className="text-gray-600">Year: {new Date(bookDetails?.publishedDate).getFullYear()}</p>}
        <button className="text-sm bg-red-500 text-white px-2 py-1 rounded-md mt-2" onClick={() => handleRemoveBookFromShelf(shelf, bookId, setShelves)}>
          Remove
        </button>
        <button className="text-sm bg-blue-500 text-white px-2 py-1 rounded-md ml-2" onClick={handleChangeStateClick}>
          Change Reading State
        </button>
        {showDropdown && (
          <div className="mt-2">
            <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              <option value="read">Read</option>
              <option value="reading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
             
            </select>
            <button className="text-sm bg-blue-500 text-white px-2 py-1 rounded-md ml-2" onClick={handleChangeState}>
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookInfo;
