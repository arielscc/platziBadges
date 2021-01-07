import React, { useEffect, useState } from 'react';

import { Link, useHistory, useParams } from 'react-router-dom';
import confLogo from '../images/platziconf-logo.svg';
import './BadgeDetails.css';
import { Grid } from 'svg-loaders-react';
import api from '../api';
import Badge from '../components/Badge/Badge';
import { Modal } from '../components/Modal/Modal';

const BadgeDetails = children => {
  const initialState = {
    data: {},
    error: null,
    loading: true,
  };
  const [state, setState] = useState(initialState);
  const [modal, setModal] = useState(false);
  const { badgeId } = useParams();
  let history = useHistory();

  const { firstName, lastName, email, twitter, jobTitle } = state.data;

  useEffect(() => {
    //aplicando foncion asincrona y un IFFE a un useEffect
    (async function dataAsync() {
      const data = await api.badges.read(badgeId);
      setState({
        ...state,
        data,
        loading: false,
      });
    })();
  }, []);

  const toggleDelete = () => {
    api.badges.remove(badgeId).then(() => {
      history.push('/badges');
    });
  };

  return (
    <div>
      {state.loading ? (
        <div className="loader">
          <Grid fill="#7dcd40" width={100} height={100} />
        </div>
      ) : (
        <>
          <div className="BadgeDetails__hero">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img src={confLogo} alt="Logo de la conf" />
                </div>
                <div className="col-6 BadgeDetails__hero-attendant-name">
                  <h1>
                    {firstName} {lastName}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <Badge
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  twitter={twitter}
                  jobTitle={jobTitle}
                />
              </div>
              <div className="col">
                <h2>Actions</h2>
                <div>
                  <div>
                    <Link
                      to={`/badges/${badgeId}/edit`}
                      className="btn btn-primary mb-2"
                    >
                      Editar
                    </Link>
                  </div>
                  <div>
                    <button
                      onClick={() => setModal(!modal)}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                    <Modal
                      isOpen={modal}
                      setModal={setModal}
                      toggleDelete={toggleDelete}
                    >
                      Eliminar
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BadgeDetails;
