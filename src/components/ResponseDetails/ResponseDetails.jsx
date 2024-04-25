import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ResponseDetails.scss'
import PropTypes from 'prop-types'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'

function ResponseDetails({ responses }) {
  const { id } = useParams()
  const response = responses[id]
  const navigate = useNavigate()

  const formatResident = () => {
    console.log(response.grand_county_resident)
    if (response.grand_county_resident === 'Yes, I am a resident') {
      return 'Grand County Resident'
    } else {
      return 'Grand County Visitor'
    }
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    const date = new Date(dateString)
    return date.toLocaleDateString(undefined, options)
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
          <p className="response-date">{formatDate(response.timestamp)}</p>
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
          <p>
            <span className="mini-deets-label">Discovered by:</span>{' '}
            {response.discovered_by}
          </p>
        </div>
        <p>{response.comment}</p>
        <p>{response.impacts_speculated} </p>
      </div>
    </div>
  )
}

ResponseDetails.propTypes = {
  responses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      timestamp: PropTypes.string,
      grand_county_resident: PropTypes.string,
      concern_level: PropTypes.string,
      public_response: PropTypes.string,
      discovered_by: PropTypes.string,
      volunteer: PropTypes.string,
      comment: PropTypes.string,
      email: PropTypes.string,
      impacts_speculated: PropTypes.string,
    })
  ),
}

export default ResponseDetails
