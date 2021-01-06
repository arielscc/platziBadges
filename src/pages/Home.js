import React from 'react';
import './Home.css';

import logo from '../images/logo.svg';
import logomain from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="homeBackground">
      <div className="home__content">
        <img src={logomain} alt="" />
        <h1>Check or Create your Badge</h1>
        <div>
          <Link to="/badges" className="button">
            Badges
          </Link>
          <Link to="/badges/new" className="button button__create">
            Create Badge
          </Link>
        </div>
      </div>

      <div className="home__hero">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
