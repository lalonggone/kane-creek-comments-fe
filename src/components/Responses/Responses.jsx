import React, { useState } from 'react';
import './Responses.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Responses = ({ responses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const responsesPerPage = 10;

  const totalPages = Math.ceil(responses.length / responsesPerPage);

  const indexOfLastResponse = currentPage * responsesPerPage;
  const indexOfFirstResponse = indexOfLastResponse - responsesPerPage;
  const currentResponses = responses.slice(indexOfFirstResponse, indexOfLastResponse);

  const comments = currentResponses.map((response) => {
    const comment = response.comment ? response.comment.substring(0, 120) : '';
    return response.comment && response.comment.length > 200 ? comment + '...' : comment;
  });

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              to={`/response/${index}`}
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
        {[...Array(totalPages).keys()].map(number => (
          <button key={number + 1} onClick={() => paginate(number + 1)} className={number + 1 === currentPage ? 'active' : ''}>
            {number + 1}
          </button>
        ))}
      </div>
    </>
  );
}

Responses.propTypes = {
  responses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      comment: PropTypes.string,
    })
  ).isRequired,
};

export default Responses;
