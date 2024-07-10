import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './About.scss';

const About = () => (
  <>
    <div className="about-container">
      <h1>about this app</h1>
      <p className="about-paragraph">
        Kane Creek Comments is a web app that allows users to
        search thousands of survey
        responses regarding the Kane Creek development in{' '}
        <a className="link"
          href="https://www.grandcountyutah.net/DocumentCenter/View/19156/5_Sustainability"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grand County, Utah
        </a>. The goal of this app is to promote transparency and foster community
        engagement by making these opinions accessible and, ideally,
        key stakeholders will take these
        into account when making decisions.
      </p>
      <p className="about-paragraph">
        Notice the majority of residents rated their level of concern at 5/5.
        Try searching terms like “grew up in Moab”, “local business”,
        or “river guide” to understand the variety of community
        feedback.
      </p>
      <p className="about-paragraph">
        This is a hand-rolled, full-stack web app built using React, TypeScript, SCSS,
        Node.js, Express, PostgreSQL, and lots of love. The{' '}
        <a className="link"
          href="https://github.com/lalonggone/kane-creek-comments-fe"
          target="_blank"
          rel="noopener noreferrer"
        >
          front end
        </a>{' '}
        is deployed on Vercel and the{' '}
        <a className="link"
          href="https://github.com/lalonggone/kane-creek-comments-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          back end
        </a>{' '}
        is hosted on Render. Please{' '}
        <Link className="link" to="/contact">
          reach out
        </Link> if you have feedback or if you'd like to collaborate!
      </p>
      <p className="about-paragraph">
        Visit {' '}
        <a className="link"
          href="https://www.kanecreekwatch.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          kanecreekwatch.org
        </a> {' '}
        to learn more about the resistance against the development and discover ways to get involved.
      </p>
      <Footer />
    </div>
  </>
);

export default About;