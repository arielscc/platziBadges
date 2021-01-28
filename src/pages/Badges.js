import React, { useState, useEffect, useRef } from 'react';
import BadgesList from '../components/BadgesList/BadgesList';
import ListSkeleton from '../components/BadgesList/ListSkeleton';
import { Link } from 'react-router-dom';

import confLogo from '../images/badge-header.svg';

import api from '../api';
import './Badges.css';

export default function Badges() {
  const initialState = {
    data: [],
    error: null,
    loading: true,
  };

  const [state, setState] = useState(initialState);

  const isMounted = useRef(true);

  useEffect(() => {
    api.badges
      .list()
      .then(data => {
        if (isMounted.current) {
          setState({ ...state, loading: false, data });
        }
      })
      .catch(erro => console.log(erro));
    return () => {
      isMounted.current = false;
    };
  }, [setState]);

  return (
    <>
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo" />
          </div>
        </div>
      </div>
      <div className="Badges__container">
        <div className="Badges__buttons">
          <Link to="/badges/new" className="btn btn-primary">
            New Badge
          </Link>
        </div>
        {state.loading ? (
          <ListSkeleton cantidad={8} />
        ) : (
          <div className="Badges__list">
            <BadgesList badges={state.data} />
          </div>
        )}
        {state.error && <p>Error {state.error}</p>}
      </div>
    </>
  );
}
