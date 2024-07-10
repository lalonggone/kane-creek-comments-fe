import React from 'react';
import './Pagination.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const Pagination = ({ currentPage, totalPages, paginate }: PaginationProps) => {
  const createPaginationRange = () => {
    const delta = 0;
    const range: (number | string)[] = [];
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }
    if (currentPage - delta > 2) {
      range.unshift('.');
    }
    if (currentPage + delta < totalPages - 1) {
      range.push('.');
    }
    range.unshift(1);
    if (totalPages > 1) {
      range.push(totalPages);
    }
    return range;
  };

  const paginationRange = createPaginationRange();

  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
        prev
      </button>
      {paginationRange.map((page, index) => (
        <button
          key={index}
          onClick={() => paginate(page as number)}
          className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
          disabled={page === '.'}
        >
          {page}
        </button>
      ))}
      <button className="pagination-btn" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
        next
      </button>
    </div>
  );
};

export default Pagination;