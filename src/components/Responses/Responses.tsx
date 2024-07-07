import React, { useState } from 'react';
import './Responses.scss';
import { Link } from 'react-router-dom';
import { Response } from '../../types/Response';
import Pagination from '../Pagination/Pagination';

interface ResponsesProps {
  responses: Response[];
}

const Responses = ({ responses }: ResponsesProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const responsesPerPage = 12;

  const responsesWithComments = responses.filter(response => response.response && response.response.trim() !== '');

  const totalPages = Math.ceil(responsesWithComments.length / responsesPerPage);

  const indexOfLastResponse = currentPage * responsesPerPage;
  const indexOfFirstResponse = indexOfLastResponse - responsesPerPage;
  const currentResponses = responsesWithComments.slice(indexOfFirstResponse, indexOfLastResponse);

  const comments = currentResponses.map((response) => {
    const comment = response.response ? response.response.substring(0, 120) : '';
    return response.response && response.response.length > 200 ? comment + '...' : comment;
  });

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      {responsesWithComments.length === 0 ? (
        <div className="no-comments-found">
          <p>No comments found</p>
        </div>
      ) : (
        <div className="responses">
          {currentResponses.map((response) => (
            <Link to={`/response/${response.id}`} key={response.id} className="response-card">
              <h2>{response.name}</h2>
              <p>{comments[currentResponses.indexOf(response)]}</p>
            </Link>
          ))}
        </div>
      )}
      <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
    </>
  );
};

export default Responses;