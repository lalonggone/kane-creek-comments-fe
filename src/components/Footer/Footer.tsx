import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="underline-container">
        <div className="underline"></div>
      </div>
      <nav className="footer-nav">
        <ul>
          <li>
            <Link className="text-link" to="/">
              home
            </Link>
          </li>
          <li>
            <Link className="text-link" to="/about">
              about
            </Link>
          </li>
          <li>
            <Link className="text-link" to="/contact">
              contact
            </Link>
          </li>
        </ul>
      </nav>
      <p className="copyright">&copy; 2024 Laura Long. All rights reserved.</p>
    </footer>
  )
}

export default Footer
