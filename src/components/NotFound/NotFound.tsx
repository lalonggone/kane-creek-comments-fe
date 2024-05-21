import React from 'react'
import './NotFound.scss'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="nf-and-btn-container">
      <div className="nf-container">
        <h1 className="not-found-title">Sorry, this page doesn't exist.</h1>
        <Link to="/" className="go-home">
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
