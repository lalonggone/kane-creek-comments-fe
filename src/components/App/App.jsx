import React, { useState, useEffect } from 'react'
import allResponses from '../../../cleanedResponses.json'
import Main from '../Main/Main'
import './App.css'

function App() {
  const [responses, setResponses] = useState(allResponses)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [error, setError] = useState('')

  const filterResponses = (term, selectedFilter) => {
    const filtered = allResponses.filter((response) => {
      const termMatch = Object.values(response)
        .join(' ')
        .toLowerCase()
        .includes(term.toLowerCase())

      const filterMatch =
        selectedFilter === 'all' || response.grand_county_resident === 'Yes, I am a resident'

      return termMatch && filterMatch
    })

    setResponses(filtered)
  }

  useEffect(() => {
    filterResponses(searchTerm, filter)
  }, [searchTerm, filter])

  return (
    <Main
      responses={responses}
      setSearchTerm={setSearchTerm}
      setFilter={setFilter}
      error={error}
    />
  )
}

export default App
