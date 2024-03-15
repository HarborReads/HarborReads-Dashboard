import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import SearchHistory from './SearchHistory';
import SearchPageText from './SearchPageText'; // Import the PromotionalBanner component

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="border border-gray-300 rounded-md p-4"  style={{ backgroundColor: '#f2f2f2' }}>
      <div className="flex flex-col items-center">
        <SearchPageText />
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
