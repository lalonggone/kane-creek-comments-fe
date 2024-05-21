import React, { useState } from 'react'
import './Responses.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Responses = ({ responses }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const responsesPerPage = 10

  
  const totalPages = Math.ceil(responses.length / responsesPerPage)

  
  const indexOfLastResponse = currentPage * responsesPerPage
  const indexOfFirstResponse = indexOfLastResponse - responsesPerPage
  const currentResponses = responses.slice(
    indexOfFirstResponse,
    indexOfLastResponse
  )

  const comments = currentResponses.map((response) => {
    const comment = response.comment ? response.comment.substring(0, 120) : ''
    return response.comment && response.comment.length > 200
      ? comment + '...'
      : comment
  })

  
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  
  const createPaginationRange = () => {
    const delta = 1 
    const range = []
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i)
    }
    if (currentPage - delta > 2) {
      range.unshift('...')
    }
    if (currentPage + delta < totalPages - 1) {
      range.push('...')
    }
    range.unshift(1)
    if (totalPages > 1) {
      range.push(totalPages)
    }
    return range
  }

  const paginationRange = createPaginationRange()

  return (
    <>
      {responses.length === 0 ? (
        <div className="no-comments-found">
          <p>No comments found</p>
        </div>
      ) : (
        <div className="responses">
          {currentResponses.map((response, index) => (
            <Link
              to={`/response/${response.id}`}
              key={index}
              className="response-card"
            >
              <h2>{response.name}</h2>
              <p>{comments[index]}</p>
            </Link>
          ))}
        </div>
      )}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {paginationRange.map((page, index) => (
          <button
            key={index}
            onClick={() => paginate(page)}
            className={page === currentPage ? 'active' : ''}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  )
}

Responses.propTypes = {
  responses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      comment: PropTypes.string,
    })
  ).isRequired,
}

export default Responses
