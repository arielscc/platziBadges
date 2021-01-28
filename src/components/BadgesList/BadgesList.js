import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import './BadgesList.css';

export default function BadgesList({ badges }) {
  const badgesList = [...badges].reverse();

  const [filter, setFilter] = useState('');
  const [badgesFilered, setBadgesFilered] = useState(badgesList);

  useMemo(() => {
    const result = badgesList.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase());
    });
    setBadgesFilered(result);
  }, [badges, filter]);

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label> Search Badge</label>
        <input
          value={filter}
          onChange={e => setFilter(e.target.value)}
          type="text"
          name="search"
          className="form-control"
        />
      </div>
      <ul className="list-unstyled">
        {badgesFilered.map(badge => {
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
      <div className="badge_options">
        <Link to={`/badges/${badge.id}/edit`} className="button__edit">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <Link to={`/badges/${badge.id}`} className="button__show">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
