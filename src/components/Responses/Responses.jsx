import React from 'react';
import './Responses.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Responses({ responses }) {
  const comments = responses.map((response) => {
    const comment = response.comment ? response.comment.substring(0, 120) : '';
    return response.comment && response.comment.length > 200 ? comment + '...' : comment;
  });

  return (
    <>
      {responses.length === 0 ? (
        <div className="no-comments-found">
          <p>No comments found</p>
        </div>
      ) : (
        <div className="responses">
          {responses.map((response, index) => (
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
