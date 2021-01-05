import React, { useState } from 'react';
import Badge from '../components/Badge/Badge';
import BadgeForm from '../components/BadgeForm/BadgeForm';

import api from '../api';

import './BadgeNew.css';

import platziconf from '../images/platziconf-logo.svg';

export default function BadgeNew() {
  const initialState = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
    error: null,
    loading: false,
  };

  const [state, setState] = useState(initialState);
  const { firstName, lastName, email, jobTitle, twitter } = state.form;

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
      e.preventDefault();
      await api.badges.create(state.form);
      setState({ ...initialState, loading: false });
    } catch (error) {
      setState({ ...state, loading: false, error });
    }
  };

  return (
    <>
      <div className="BadgeNew__hero">
        <img
          className="img-fluid BadgeNew__hero-image"
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
              // avatar="https://www.gravatar.com/avatar/105e460b479e2e5b48aec07710c08d50?r=pg"
            />
          </div>
          <div className="col-6">
            <BadgeForm
              onChange={handleChange}
              onSubmit={handleSubmit}
              formValues={state.form}
            />
          </div>
        </div>
      </div>
    </>
  );
}
