// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import SearchHistory from './SearchHistory';
import SearchPageText from './SearchPageText'; // Import the PromotionalBanner component

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="border border-gray-300 rounded-md p-4">
    <div className="flex justify-between items-center">
      <div className="mt-9"> {/* Add margin-top to push the PromotionalBanner lower */}
          <SearchPageText />
      </div>
      <SearchBar setSearchTerm={setSearchTerm} />
    </div>
      <br/>
      <SearchResults searchTerm={searchTerm} />
      <br/>
      <SearchHistory />
    </div>
  );
}

export default SearchPage;
