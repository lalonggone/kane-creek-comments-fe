import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ResponseDetails.css'

function ResponseDetails({ responses }) {
  const { id } = useParams()
  const response = responses[id]
  const navigate = useNavigate()

  return (
    // when the response is clicked, the details of the response will be displayed dynamically
    // the details will include the timestamp, name, concern level, public response, discovered by, volunteer

    <div className="response-details-container">
      <button className="button go-back" onClick={() => navigate(-1)}>
        Go Back
      </button>
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

export default ResponseDetails
