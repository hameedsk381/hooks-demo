import { useState, useCallback } from 'react';
import { throttle } from 'lodash';  // Using lodash for throttling

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const throttledSearch = useCallback(
    throttle((query) => {
      // Perform the search operation with the query
      console.log('Searching for:', query);
    }, 300),
    []  // Empty dependency array means the throttled function is created once and reused
  );

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    throttledSearch(query);
  };

  return <input value={searchTerm} onChange={handleSearchChange} />;
};
export default SearchComponent