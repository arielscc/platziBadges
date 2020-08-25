import React from 'react';

import './BadgesList.css';

export default function BadgesList({ badges }) {
  return (
    <div className="BadgesList">
      <ul className="list-unstyled">
        {badges.map(badge => {
          return (
            <li key={badge.id}>
              <BadgesListItem badge={badge} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function BadgesListItem({ badge }) {
  return (
    <div className="BadgesListItem">
      <img
        className="BadgesListItem__avatar"
        src={badge.avatarUrl}
        alt={`${badge.firstName} ${badge.lastName}`}
      />

      <div>
        <strong>
          {badge.firstName} {badge.lastName}
        </strong>
        <br />@{badge.twitter}
        <br />
        {badge.jobTitle}
      </div>
    </div>
  );
}
