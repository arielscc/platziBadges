import React, { useState, useEffect } from 'react';

import confLogo from '../images/badge-header.svg';

import './Badges.css';
import BadgesList from '../components/BadgesList/BadgesList';
import { Link } from 'react-router-dom';
import api from '../api';
import ListSkeleton from '../components/BadgesList/ListSkeleton';
export default function Badges() {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: [],
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fetchData = async () => {
    try {
      const data = await api.badges.list();
      setState({ loading: false, data });
    } catch (error) {
      setState({ loading: false, error });
    }
  };

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
          <ListSkeleton cantidad={50} />
        ) : (
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={state.data} />
            </div>
          </div>
        )}
        {state.error && <p>Error {state.error}</p>}
      </div>
    </>
  );
}
