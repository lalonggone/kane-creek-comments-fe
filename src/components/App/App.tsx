import { useState, useEffect } from 'react'
import { getResponses, getStats } from '../../services/api'
import Main from '../Main/Main'
import About from '../About/About'
import NotFound from '../NotFound/NotFound'
import ResponseDetails from '../ResponseDetails/ResponseDetails'
import Contact from '../Contact/Contact'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Response } from '../../types/Response'
import { Stats } from '../../types/Stats'

const LIMIT = 12

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [residency, setResidency] = useState<string>('all')
  const [page, setPage] = useState<number>(1)

  const [results, setResults] = useState<Response[]>([])
  const [total, setTotal] = useState<number>(0)
  const [stats, setStats] = useState<Stats | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Debounce the search box so we don't fire a request on every keystroke.
  const [debouncedTerm, setDebouncedTerm] = useState<string>('')
  useEffect(() => {
    const t = setTimeout(() => setDebouncedTerm(searchTerm.trim()), 300)
    return () => clearTimeout(t)
  }, [searchTerm])

  // A new search or filter always returns to the first page.
  useEffect(() => {
    setPage(1)
  }, [debouncedTerm, residency])

  // Fetch the current page whenever the query, filter, or page changes.
  useEffect(() => {
    let active = true
    setIsLoading(true)
    getResponses({ q: debouncedTerm, residency, page, limit: LIMIT })
      .then((data) => {
        if (!active) return
        setResults(data.results)
        setTotal(data.total)
        setError(null)
      })
      .catch((err) => {
        if (!active) return
        setError(err.message)
        console.error('Error fetching responses:', err)
      })
      .finally(() => {
        if (active) setIsLoading(false)
      })
    return () => {
      active = false
    }
  }, [debouncedTerm, residency, page])

  // Stats line — fetched once.
  useEffect(() => {
    getStats()
      .then(setStats)
      .catch((err) => console.error('Error fetching stats:', err))
  }, [])

  const totalPages = Math.max(1, Math.ceil(total / LIMIT))

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            results={results}
            total={total}
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            residency={residency}
            setResidency={setResidency}
            isLoading={isLoading}
            error={error}
            stats={stats}
          />
        }
      />
      <Route path="/response/:id" element={<ResponseDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
