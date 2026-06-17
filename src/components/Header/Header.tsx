import './Header.scss'
import { Stats } from '../../types/Stats'

interface HeaderProps {
  stats: Stats | null
}

function Header({ stats }: HeaderProps) {
  const statsRow = () => {
    if (!stats) return null
    const concern5 = stats.byConcernLevel.find((c) => c.concern_level === 5)
    const residents = stats.byResidency.find(
      (r) => r.grand_county_resident === 'Yes, I am a resident'
    )
    const pctConcern5 = concern5 ? Math.round((concern5.count / stats.total) * 100) : null

    return (
      <div className="stats-row">
        <div className="stat">
          <span className="stat-num">{stats.total.toLocaleString()}</span>
          <span className="stat-label">people responded</span>
        </div>
        {pctConcern5 != null && (
          <div className="stat">
            <span className="stat-num">{pctConcern5}%</span>
            <span className="stat-label">rated their concern 5/5</span>
          </div>
        )}
        {residents && (
          <div className="stat">
            <span className="stat-num">{residents.count.toLocaleString()}</span>
            <span className="stat-label">local residents</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <header className="header">
      <nav className="header-nav">
        <a className="text-link kcdw-link" href="https://www.kanecreekwatch.org">
          ← kanecreekwatch.org
        </a>
      </nav>

      <div className="header-hero">
        <h1>Kane Creek Comments</h1>
        {statsRow()}
        <p className="intro">
          From December 2023 to July 2024, thousands of people shared how they feel
          about the proposed development near Kane Creek. Read and search their words
          below.
        </p>
      </div>
    </header>
  )
}

export default Header
