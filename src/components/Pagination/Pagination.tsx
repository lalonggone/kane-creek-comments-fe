import './Pagination.scss'

interface PaginationProps {
  currentPage: number
  totalPages: number
  paginate: (pageNumber: number) => void
}

const DOTS = '…'

const Pagination = ({ currentPage, totalPages, paginate }: PaginationProps) => {
  if (totalPages <= 1) return null

  const siblings = 1

  // Windowed range: always show first + last, the current page and one neighbor
  // on each side, with ellipses for the gaps.
  const buildRange = (): (number | string)[] => {
    const totalSlots = siblings * 2 + 5 // first, last, current, 2 dots, 2 siblings
    if (totalPages <= totalSlots) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const left = Math.max(currentPage - siblings, 1)
    const right = Math.min(currentPage + siblings, totalPages)
    const showLeftDots = left > 2
    const showRightDots = right < totalPages - 1
    const pages: (number | string)[] = []

    if (!showLeftDots && showRightDots) {
      for (let i = 1; i <= 3 + 2 * siblings; i++) pages.push(i)
      pages.push(DOTS, totalPages)
    } else if (showLeftDots && !showRightDots) {
      pages.push(1, DOTS)
      for (let i = totalPages - (2 + 2 * siblings); i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1, DOTS)
      for (let i = left; i <= right; i++) pages.push(i)
      pages.push(DOTS, totalPages)
    }
    return pages
  }

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        className="pagination-btn pagination-step"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        ‹ prev
      </button>

      {buildRange().map((page, index) =>
        page === DOTS ? (
          <span key={`dots-${index}`} className="pagination-dots">
            {DOTS}
          </span>
        ) : (
          <button
            key={page}
            onClick={() => paginate(page as number)}
            className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        )
      )}

      <button
        className="pagination-btn pagination-step"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        next ›
      </button>
    </nav>
  )
}

export default Pagination
