import React from 'react'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import Responses from '../Responses/Responses'
import './Main.css'

function Main({ responses, setSearchTerm, setFilter }) {
  return (
    <>
      <main className="main">
        <Header />
        <Search setSearchTerm={setSearchTerm} setFilter={setFilter} />
        <Responses responses={responses} />
      </main>
    </>
  )
}

export default Main
