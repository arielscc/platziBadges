import React, { useEffect, useState } from 'react';
import Badge from '../components/Badge/Badge';
import BadgeForm from '../components/BadgeForm/BadgeForm';
import { Grid } from 'svg-loaders-react';
import api from '../api';
import md5 from 'md5';
import './BadgeEdit.css';
import { useHistory, useParams } from 'react-router-dom';

import platziconf from '../images/platziconf-logo.svg';

export default function BadgeEdit() {
  const initialState = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatarUrl: '',
    },
    error: null,
    loading: true,
  };
  const [state, setState] = useState(initialState);
  let history = useHistory();
  const { firstName, lastName, email, jobTitle, twitter } = state.form;

  let { badgeId } = useParams();

  useEffect(() => {
    api.badges.read(badgeId).then(data => {
      setState({ ...state, form: data, loading: false });
    });
    return () => {
      // cleanup;
    };
  }, []);

  const handleChange = e => {
    setState({
      ...state,
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async e => {
    try {
      setState({ ...state, loading: true });
      e.preventDefault();
      const data = {
        ...state,
        form: {
          ...state.form,
          avatarUrl: `https://www.gravatar.com/avatar/${md5(
            email
          )}?d=identicon`,
        },
      };
      await api.badges.update(badgeId, data.form);
      setState({ ...initialState, loading: false });
      history.push('/badges');
    } catch (error) {
      setState({ ...state, loading: false, error });
    }
  };

  return (
    <>
      {state.loading ? (
        <div className="loader">
          <Grid fill="#7dcd40" width={100} height={100} />
        </div>
      ) : (
        <div>
          <div className="BadgeEdit__hero">
            <img
              className="img-fluid BadgeEdit__hero-image"
              src={platziconf}
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Badge
                  firstName={firstName || 'First_Name'}
                  lastName={lastName || 'Last_Name'}
                  jobTitle={jobTitle || 'Job_Title'}
                  twitter={twitter || 'twitter'}
                  email={email}
                />
              </div>
              <div className="col-6">
                <h2>Edit Attendant</h2>
                <BadgeForm
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  formValues={state.form}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
