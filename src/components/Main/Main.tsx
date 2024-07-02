import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Search from '../Search/Search'
import Responses from '../Responses/Responses'
import './Main.scss'

function Main({ responses, setSearchTerm, setFilter }) {
  return (
    <>
      <main className="main">
        <Header />
        <Search setSearchTerm={setSearchTerm} setFilter={setFilter} />
        <Responses responses={responses} />
        <Footer />
      </main>
    </>
  )
}


export default Main
