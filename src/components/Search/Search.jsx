import React from 'react'
import './Search.css'

function Search({ setSearchTerm, setFilter }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="search keywords"
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
            <option value="all">All responses</option>
            <option value="gc-residents">Moab residents</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Search
