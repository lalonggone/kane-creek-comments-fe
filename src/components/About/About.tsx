import React from 'react';
import Footer from '../Footer/Footer';
import './About.scss';

const About = () => (
  <>
    <div className="about-container">
      <h1>about this app</h1>
      <p className="about-paragraph">
        Kane Creek Comments is a platform that allows users to
        filter, search through and display the thousands of petition survey
        responses to the contentious Kane Creek development in Grand County,
        Utah. The goal is to promote transparency and foster community
        engagement by making these opinions accessible. Hopefully,
        key stakeholders like investors and elected officials will take these
        into account when making decisions.
      </p>
      <p className="about-paragraph">
        Notice how the majority of residents rate their level of concern at 5/5.
        We recommend searching terms like “grew up in Moab”, “local business”,
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
        is hosted on Render. Feel free to reach out if you have any questions / feedback or to collaborate!
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
        to learn more about the development and discover ways to get involved.
      </p>
      <Footer />
    </div>
  </>
);

export default About;