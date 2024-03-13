import React from 'react';
import { FiBookOpen } from 'react-icons/fi'; // Import an icon from React Icons

function SearchPageText() {
  return (
    <div className="ml-9 flex items-center mb-4">
      <FiBookOpen className="mr-2 text-brown text-3xl mt-2" /> {/* Add an icon */}
      <p className="text-xl text-black">
        Discover Your Next Adventure
      </p>
    </div>
  );
}

export default SearchPageText;
