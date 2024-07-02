import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ResponseDetails.scss'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { Response } from '../../types/Response'

interface ResponseDetailsProps {
  responses: Response[]
}

const ResponseDetails = ({ responses }: ResponseDetailsProps) => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const response = responses.find(
    (response) => response.id === parseInt(id!, 10)
  )

  if (!response) {
    return <p className="not-found">comment not found</p>
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
    const date = new Date(dateString)
    return date.toLocaleDateString(undefined, options)
  }

  const formatResident = () => {
    return response.grand_county_resident === 'Yes, I am a resident'
      ? 'Grand County Resident'
      : 'Grand County Visitor'
  }

  const formatImpacts = () => {
    const impacts = response.impacts_speculated.split(',')
    return impacts.map((impact, index) => (
      <li key={index} className="impact">
        {impact}
      </li>
    ))
  }

  return (
    <div className="response-details-container">
      <div className="go-back-container">
        <ArrowLeftIcon className="arrow-left" />
        <button className="button go-back" onClick={() => navigate(-1)}>
          go back
        </button>
      </div>
      <div className="response-details">
        <div className="name-date-container">
          <h2 className="response-name">{response.name}</h2>
          <p className="response-date">{formatDate(response.submitted_at)}</p>
        </div>
        <div className="mini-deets">
          <p className="mini-deets-label">{formatResident()}</p>
          <p>
            <span className="mini-deets-label">Level of concern:</span>{' '}
            {response.concern_level}
          </p>
          <p>
            <span className="mini-deets-label">Open to volunteer:</span>{' '}
            {response.volunteer}
          </p>

        </div>
        <p className="response-comment">{response.response}</p>
        <div className="response-impacts">
          <span className="mini-deets-label">
            Concerned about the following impacts:
          </span>{' '}
          <ul>{formatImpacts()}</ul>
        </div>
      </div>
    </div>
  )
}

export default ResponseDetails
