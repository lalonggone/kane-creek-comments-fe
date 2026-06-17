import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ResponseDetails.scss'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { getResponseById } from '../../services/api'
import { Response } from '../../types/Response'

const ResponseDetails = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [response, setResponse] = useState<Response | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    let active = true
    setIsLoading(true)
    getResponseById(id)
      .then((data) => {
        if (active) setResponse(data)
      })
      .catch((err) => {
        console.error('Error fetching response:', err)
        if (active) setResponse(null)
      })
      .finally(() => {
        if (active) setIsLoading(false)
      })
    return () => {
      active = false
    }
  }, [id])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString.replace(' ', 'T'))
    if (isNaN(date.getTime())) return ''
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const formatResident = (value: string) =>
    value === 'Yes, I am a resident' ? 'Grand County Resident' : 'Grand County Visitor'

  // `impacts_speculated` is a comma-separated string and is frequently null —
  // guard before splitting.
  const impacts = (response?.impacts_speculated || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)

  return (
    <div className="response-details-container">
      <div className="go-back-container">
        <button className="button go-back" onClick={() => navigate(-1)}>
          <ArrowLeftIcon className="arrow-left" />
          go back
        </button>
      </div>

      {isLoading ? (
        <p className="not-found">Loading…</p>
      ) : !response ? (
        <p className="not-found">comment not found</p>
      ) : (
        <div className="response-details">
          <div className="name-date-container">
            <h2 className="response-name">{response.name}</h2>
            <p className="response-date">{formatDate(response.submitted_at)}</p>
          </div>
          <div className="mini-deets">
            <p className="mini-deets-label">{formatResident(response.grand_county_resident)}</p>
            {response.concern_level != null && (
              <p>
                <span className="mini-deets-label">Level of concern:</span>{' '}
                {response.concern_level}
              </p>
            )}
          </div>
          <p className="response-comment">{response.response}</p>
          {impacts.length > 0 && (
            <div className="response-impacts">
              <span className="mini-deets-label">
                Concerned about the following impacts:
              </span>
              <ul>
                {impacts.map((impact, index) => (
                  <li key={index} className="impact">
                    {impact}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ResponseDetails
