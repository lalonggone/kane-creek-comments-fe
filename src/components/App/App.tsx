import React, { useState, useEffect } from 'react'
import getResponses from '../../services/api'
import Main from '../Main/Main'
import About from '../About/About'
import NotFound from '../NotFound/NotFound'
import ResponseDetails from '../ResponseDetails/ResponseDetails'
import Contact from '../Contact/Contact'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Response } from '../../types/Response'

const App = () => {
  const [responses, setResponses] = useState<Response[]>([])
  const [filteredResponses, setFilteredResponses] = useState<Response[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filter, setFilter] = useState<string>('all')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    getResponses()
      .then((data) => {
        setResponses(data)
        setFilteredResponses(data)
      })
      .catch((error) => {
        setError(error.message)
        console.error('Error fetching responses:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const filterAndSortResponses = (term: string, selectedFilter: string) => {
    const filtered = responses
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
      .filter((response) => response.response !== '')

    const sorted = filtered.sort(
      (a, b) =>
        new Date(b.submitted_at).getTime() - new Date(a.submitted_at).getTime()
    )

    setFilteredResponses(sorted)
  }

  useEffect(() => {
    filterAndSortResponses(searchTerm, filter)
  }, [searchTerm, filter, responses])

  if (isLoading) {
    return <div className="loading">Loading...(this may take a minute)</div>
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              responses={filteredResponses}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setFilter={setFilter}
              // error={error}
            />
          }
        />
        <Route
          path="/response/:id"
          element={<ResponseDetails responses={filteredResponses} />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
