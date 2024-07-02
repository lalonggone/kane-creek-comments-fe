import React, { useState, useEffect } from 'react';
import './Responses.scss';
import { Link } from 'react-router-dom';
import { Response } from '../../types/Response';

interface ResponsesProps {
  responses: Response[]
}

const Responses = ({ responses }: ResponsesProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const responsesPerPage = 12;

  const responsesWithComments = responses.filter(response => response.response && response.response.trim() !== '');

  const totalPages = Math.ceil(responsesWithComments.length / responsesPerPage);

  const indexOfLastResponse = currentPage * responsesPerPage;
  const indexOfFirstResponse = indexOfLastResponse - responsesPerPage;
  const currentResponses = responsesWithComments.slice(
    indexOfFirstResponse,
    indexOfLastResponse
  );

  const comments = currentResponses.map((response) => {
    const comment = response.response ? response.response.substring(0, 120) : '';
    return response.response && response.response.length > 200
      ? comment + '...'
      : comment;
  });

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const createPaginationRange = () => {
    const delta = 2; 
    const range: (number | string)[] = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }
    if (currentPage - delta > 2) {
      range.unshift('...');
    }
    if (currentPage + delta < totalPages - 1) {
      range.push('...');
    }
    range.unshift(1);
    if (totalPages > 1) {
      range.push(totalPages);
    }
    return range;
  };

  const paginationRange = createPaginationRange();

  return (
    <>
      {responsesWithComments.length === 0 ? (
        <div className="no-comments-found">
          <p>No comments found</p>
        </div>
      ) : (
        <div className="responses">
          {currentResponses.map((response) => (
            <Link
              to={`/response/${response.id}`}
              key={response.id}
              className="response-card"
            >
              <h2>{response.name}</h2>
              <p>{comments[currentResponses.indexOf(response)]}</p>
            </Link>
          ))}
        </div>
      )}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          prev
        </button>
        {paginationRange.map((page, index) => (
          <button
            key={index}
            onClick={() => paginate(page as number)}
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
          next
        </button>
      </div>
    </>
  );
};

export default Responses;