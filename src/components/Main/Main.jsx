import React from 'react'
import Header from '../Header/Header'
import responses from '../../../cleanedResponses.json'

function Main() {
  return (
    <>
      <main className="main">
        <section>
          <Header />
          <div>
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" name="search" />
            <label htmlFor="filter">Filter:</label>
            <select id="filter" name="filter">
              <option value="all">All</option>
              <option value="positive">Positive</option>
              <option value="negative">Negative</option>
            </select>
          </div>
          <div>
            {responses.map((response, index) => {
              return (
                <div key={index}>
                  <h3>{response.response}</h3>
                  <p>{response.comment}</p>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default Main
