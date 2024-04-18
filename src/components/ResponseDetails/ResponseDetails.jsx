import React from 'react'
import { useParams } from 'react-router-dom'

function ResponseDetails( { responses }) {
    const { id } = useParams()
    const response = responses[id]

  return (
    // when the response is clicked, the details of the response will be displayed dynamically
    // the details will include the timestamp, name, concern level, public response, discovered by, volunteer
    <div>
        <h2>{response.name}</h2>
        <p>{response.timestamp}</p>
        <p>{response.grand_county_resident}</p>
        <p>{response.concern_level}</p>
        <p>{response.public_response}</p>
        <p>{response.discovered_by}</p>
        <p>{response.volunteer}</p>
    </div>
  )
}

export default ResponseDetails
