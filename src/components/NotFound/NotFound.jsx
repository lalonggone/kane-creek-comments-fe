import React from 'react'
import './NotFound.scss'

function NotFound() {
  return (
    <div className="nf-and-btn-container">
      <div className="nf-container">
        <h1 className="not-found-title">Sorry, this page doesn't exist.</h1>
        <button className="go-home">Go Home</button>
      </div>
    </div>
  )
}

export default NotFound
