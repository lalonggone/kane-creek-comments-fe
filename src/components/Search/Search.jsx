import React from 'react'
import './Search.css'

function Search({setSearchTerm}) {

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div>
      <label htmlFor="search" className='visually-hidden'>Search</label>
      <input type="text" id="search" name="search" placeholder="search keywords" onChange={handleSearch} />
      <label htmlFor="filter" className='visually-hidden'>Filter</label>
      <select id="filter" name="filter">
        <option value="all">All responses</option>
        <option value="gc-residents">Moab residents</option>
      </select>
    </div>
  )
}

export default Search
