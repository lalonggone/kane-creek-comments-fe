import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Search from '../Search/Search'
import Responses from '../Responses/Responses'
import './Main.scss'
import { Response } from '../../types/Response'
import { Stats } from '../../types/Stats'

interface MainProps {
  results: Response[]
  total: number
  page: number
  totalPages: number
  setPage: (page: number) => void
  searchTerm: string
  setSearchTerm: (term: string) => void
  residency: string
  setResidency: (residency: string) => void
  isLoading: boolean
  error: string | null
  stats: Stats | null
}

function Main({
  results,
  total,
  page,
  totalPages,
  setPage,
  searchTerm,
  setSearchTerm,
  residency,
  setResidency,
  isLoading,
  error,
  stats,
}: MainProps) {
  return (
    <main className="main">
      <Header stats={stats} />
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        residency={residency}
        setResidency={setResidency}
      />
      <Responses
        results={results}
        total={total}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        isLoading={isLoading}
        error={error}
      />
      <Footer />
    </main>
  )
}

export default Main
