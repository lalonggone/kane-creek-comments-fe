import React from 'react'
// import responses from '../../../cleanedResponses.json'

function Responses({ responses }) {
  return (
    <>
    <div>
      {responses.map((response, index) => {
        return (
          <div key={index}>
            <h3>{response.response}</h3>
            <p>{response.comment}</p>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Responses
