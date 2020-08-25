import React from 'react';

import confLogo from '../../images/badge-header.svg';
import './Badge.css';

export default function Badge({ firstName, lastName, email, jobTitle, twitter, avatar }) {
  return (
    <div className="badge">
      <div className="badge_header">
        <img src={confLogo} alt="Logo Conferencia" />
      </div>
      <div className="badge_section-name">
        <img className="badge_avatar" src={avatar} alt="Avatar" />
        <h1>
          {firstName} <br /> {lastName}
        </h1>
      </div>

      <div className="badge_section-info">
        <h3>{jobTitle}</h3>
        <div>@{twitter}</div>
      </div>
      <div className="badge_footer">#PlatziConf</div>
    </div>
  );
}
