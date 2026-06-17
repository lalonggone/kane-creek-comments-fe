import './Responses.scss'
import { Link } from 'react-router-dom'
import { Response } from '../../types/Response'
import Pagination from '../Pagination/Pagination'

interface ResponsesProps {
  results: Response[]
  total: number
  page: number
  totalPages: number
  setPage: (page: number) => void
  isLoading: boolean
  error: string | null
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString.replace(' ', 'T'))
  if (isNaN(date.getTime())) return ''
  return date
    .toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
    .toUpperCase()
}

const residencyLabel = (value: string) =>
  value === 'Yes, I am a resident' ? 'resident' : 'visitor'

const Responses = ({
  results,
  total,
  page,
  totalPages,
  setPage,
  isLoading,
  error,
}: ResponsesProps) => {
  if (error) {
    return (
      <div className="responses-status">
        <p>Sorry — couldn’t load comments. Please try again.</p>
      </div>
    )
  }

  if (isLoading && results.length === 0) {
    return (
      <div className="responses-status">
        <p>Loading comments…</p>
      </div>
    )
  }

  if (total === 0) {
    return (
      <div className="responses-status">
        <p>No comments found.</p>
      </div>
    )
  }

  return (
    <>
      <div className={`responses ${isLoading ? 'is-loading' : ''}`}>
        {results.map((response) => (
          <Link
            to={`/response/${response.id}`}
            key={response.id}
            className="response-card"
          >
            <h2>{response.name}</h2>
            <p className="response-meta">
              <span>{formatDate(response.submitted_at)}</span>
              <span>{residencyLabel(response.grand_county_resident)}</span>
              {response.concern_level != null && (
                <span>concern {response.concern_level}/5</span>
              )}
            </p>
            <p className="response-excerpt">{response.response}</p>
          </Link>
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} paginate={setPage} />
    </>
  )
}

export default Responses
