import React from 'react';
import './Search.scss';

function Search({ searchTerm, setSearchTerm, setFilter }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log('search term:', e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    console.log('filter:', e.target.value);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="search keywords"
          value={searchTerm} // Set the value to the searchTerm state
          onChange={handleSearch}
          aria-label="Search"
        />
        <div className="filter-container">
          <select
            id="filter"
            name="filter"
            onChange={handleFilter}
            aria-label="Filter"
          >
            <option value="all">all</option>
            <option value="gc-residents">Moab residents</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;