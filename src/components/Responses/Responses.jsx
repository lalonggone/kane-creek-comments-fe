import React from 'react'
import './Responses.css'
import { Link } from 'react-router-dom'

function Responses({ responses }) {

const first100 = responses.slice(0, 100)
const comments = first100.map(response => {
  const comment = response.comment.substring(0, 120)
  return response.comment.length > 200 ? comment + '...' : comment
})


  return (
    <>
    <div className="responses">
      {first100.map((response, index) => {
        return (
          <Link to={`/response/${index}`} key={index} className="response-card">
            <h2>{response.name}</h2>
            <p>{comments[index]}</p>
          </Link>
        )
      })}
    </div>
    </>
  )
}

export default Responses
