import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    api.badges.list().then(data => {
      setState({ ...state, loading: false, data });
    });
    // return () => {
    //   cleanup
    // }
  }, []);
  // const fetchData = async () => {
  //   try {
  //     const data = await api.badges.list();
  //     setState({ ...state, loading: false, data });
  //   } catch (error) {
  //     setState({ ...state, loading: false, error });
  //   }
  // };
  // fetchData();

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
