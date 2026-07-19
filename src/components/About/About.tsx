import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './About.scss';

const About = () => (
  <div className="about-container">
    <h1>about this app</h1>

    <p className="about-paragraph">
      Kane Creek Comments is a web app that allows users to search thousands of
      survey responses regarding the Kane Creek development in{' '}
      <a
        className="link"
        href="https://www.grandcountyutah.net/DocumentCenter/View/19156/5_Sustainability"
        target="_blank"
        rel="noopener noreferrer"
      >
        Grand County, Utah
      </a>
      . The goal of this app is to promote transparency and foster community
      engagement by making these opinions accessible and, ideally, key stakeholders
      will take these into account when making decisions.
    </p>

    <p className="about-paragraph">
      I first built this while learning the fundamentals of software development,
      and it became the project where a lot of those fundamentals clicked:
      designing a REST API, wiring a front end to a back end, modeling and
      querying data, writing automated tests, and deploying a full-stack app to
      the web.
    </p>

    <p className="about-paragraph">
      It’s hand-rolled top to bottom. The front end is React with TypeScript,
      React Router, and SCSS, bundled with Vite and covered by Cypress end-to-end
      tests. The back end is a Node.js and Express API using Knex over a SQLite
      database, running behind an nginx reverse proxy on a server I host myself.
      Both the{' '}
      <a
        className="link"
        href="https://github.com/lalonggone/kane-creek-comments-fe"
        target="_blank"
        rel="noopener noreferrer"
      >
        front end
      </a>{' '}
      and{' '}
      <a
        className="link"
        href="https://github.com/lalonggone/kane-creek-comments-api"
        target="_blank"
        rel="noopener noreferrer"
      >
        back end
      </a>{' '}
      are open source. Please{' '}
      <Link className="link" to="/contact">
        reach out
      </Link>{' '}
      if you have feedback or if you’d like to collaborate!
    </p>

    <h2 className="about-heading">how to use</h2>

    <p className="about-paragraph">
      Notice the majority of residents rated their level of concern at 5/5. Try
      searching terms like “grew up in Moab”, “local business”, or “river guide” to
      understand the variety of community feedback.
    </p>

    <h2 className="about-heading">version history</h2>

    <ul className="version-history">
      <li>
        <span className="version-tag">v1.0 · 2024</span>
        The first release: browse, search, and filter thousands of survey
        responses, each with its own detail page. Built as a React front end
        backed by an Express API and a PostgreSQL database, and deployed on a
        managed hosting platform.
      </li>
      <li>
        <span className="version-tag">v2.0 · 2026</span>
        Rebuilt the data layer on SQLite and migrated the app to a server I host
        myself. Added server-side search and pagination so it scales past loading
        everything at once, a live stats summary, and PII-safe API responses that
        never expose anyone’s personal contact information, plus a refreshed
        comment-browsing interface.
      </li>
    </ul>

    <h2 className="about-heading">get involved</h2>

    <p className="about-paragraph">
      Visit{' '}
      <a
        className="link"
        href="https://www.kanecreekwatch.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        kanecreekwatch.org
      </a>{' '}
      to learn more about the resistance against the development and discover ways to
      get involved.
    </p>

    <Footer />
  </div>
);

export default About;
