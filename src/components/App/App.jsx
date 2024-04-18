import React, { useState, useEffect } from 'react'
import allResponses from '../../../cleanedResponses.json'
import Main from '../Main/Main'

function App() {
  const [responses, setResponses] = useState(allResponses)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [error, setError] = useState('')


  // filter responses needs to consider the term and the filter (all vs residents)
  const filterResponses = (searchTerm) => {
    if (searchTerm === '') {
      setResponses(allResponses)
    } else {
      const filtered = allResponses.filter((response) =>
        Object.values(response)
          .join('')
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
      setResponses(filtered)
    }
  }

  useEffect(() => {
    filterResponses(searchTerm)
  }, [searchTerm])

  return (
    <Main
      responses={responses}
      setSearchTerm={setSearchTerm}
      error={error}
    />
  )
}

export default App