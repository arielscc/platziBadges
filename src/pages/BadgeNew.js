import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Badge from '../components/Badge/Badge';

import imgHeader from '../images/badge-header.svg';

import './BadgeNew.css';

export const BadgeNew = () => {
  return (
    <div>
      <Navbar />
      <div className="BadgeNew__hero">
        <img src={imgHeader} alt="" />
      </div>
      <div className="container">
        <div className="col">
          <div className="row">
            <Badge
              firstName="Ariel"
              lastName="Chura"
              title="Frontend Developer"
              twitter="arielscc"
              avatar="https://www.gravatar.com/avatar/105e460b479e2e5b48aec07710c08d50?r=pg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
