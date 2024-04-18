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
        <section>
          <Header />
          <Nav />
          <Search
            setSearchTerm={setSearchTerm}
            setFilter={setFilter}
          />
          <Responses responses={responses} />
        </section>
      </main>
    </>
  )
}

export default Main
