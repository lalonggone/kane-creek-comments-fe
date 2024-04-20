import React, { useState, useEffect } from 'react'
import allResponses from '../../../cleanedResponses.json'
import Main from '../Main/Main'
import NotFound from '../NotFound/NotFound'
import ResponseDetails from '../ResponseDetails/ResponseDetails'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [responses, setResponses] = useState(allResponses)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  
  const filterAndSortResponses = (term, selectedFilter) => {
    const filtered = allResponses
      .filter((response) => {
        const termMatch = Object.values(response)
          .join(' ')
          .toLowerCase()
          .includes(term.toLowerCase())

        const filterMatch =
          selectedFilter === 'all' ||
          response.grand_county_resident === 'Yes, I am a resident'

        return termMatch && filterMatch
      })
      .filter((response) => response.comment !== '')

    const sorted = filtered.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    )

    setResponses(sorted)
  }

  useEffect(() => {
    filterAndSortResponses(searchTerm, filter)
  }, [searchTerm, filter])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            responses={responses}
            setSearchTerm={setSearchTerm}
            setFilter={setFilter}
            // error={error}
          />
        }
      />
      <Route
        path="/response/:id"
        element={<ResponseDetails responses={responses} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
