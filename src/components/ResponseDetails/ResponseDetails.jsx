import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ResponseDetails.scss'
import PropTypes from 'prop-types'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'

function ResponseDetails({ responses }) {
  const { id } = useParams()
  const response = responses[id]
  const navigate = useNavigate()

  return (
    <div className="response-details-container">
      <div className="go-back-container">
        <ArrowLeftIcon className="arrow-left" />
        <button className="button go-back" onClick={() => navigate(-1)}>
          go back
        </button>
      </div>
      <div className="response-details">
        <h2 className="response-name">{response.name}</h2>
        <p>{response.timestamp}</p>
        <p>{response.grand_county_resident}</p>
        <p>{response.concern_level}</p>
        <p>{response.public_response}</p>
        <p>{response.discovered_by}</p>
        <p>{response.volunteer}</p>
        <p>{response.comment}</p>
        <p>{response.email}</p>
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
