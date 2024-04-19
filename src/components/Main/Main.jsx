import React from 'react'
import Header from '../Header/Header'
import Search from '../Search/Search'
import Responses from '../Responses/Responses'
import PropTypes from 'prop-types'
import './Main.css'

function Main({ responses, setSearchTerm, setFilter }) {
  return (
    <>
      <main className="main">
        <Header />
        <Search handleSearch={setSearchTerm} handleFilter={setFilter} />
        <Responses responses={responses} />
      </main>
    </>
  )
}

Main.propTypes = {
  responses: PropTypes.array.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
}

export default Main
