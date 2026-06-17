import './Search.scss'

interface SearchProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  residency: string
  setResidency: (residency: string) => void
}

function Search({ searchTerm, setSearchTerm, residency, setResidency }: SearchProps) {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="search keywords"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search comments"
        />
        <div className="filter-container">
          <select
            id="filter"
            name="filter"
            value={residency}
            onChange={(e) => setResidency(e.target.value)}
            aria-label="Filter by residency"
          >
            <option value="all">all</option>
            <option value="residents">residents</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Search
