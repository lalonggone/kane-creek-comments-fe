import React from 'react'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import Responses from '../Responses/Responses'

function Main( { responses, filterResponses, setSearchTerm } ) {
  return (
    <>
      <main className="main">
        <section>
          <Header />
          <Nav />
          <Search setSearchTerm={setSearchTerm} filterResponses={filterResponses} />
          <Responses responses={responses} />
        </section>
      </main>
    </>
  )
}

export default Main
