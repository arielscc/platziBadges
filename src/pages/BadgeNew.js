import React, { useState } from 'react';
import Badge from '../components/Badge/Badge';
// import imgHeader from '../images/badge-header.svg';
import platziconf from '../images/platziconf-logo.svg';

import api from '../api';

import './BadgeNew.css';
import BadgeForm from '../components/BadgeForm/BadgeForm';

export default function BadgeNew() {
  const [state, setState] = useState({
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
    loading: false,
    error: null,
  });

  const { firstName, lastName, email, jobTitle, twitter } = state.form;

  const handleChange = e => {
    setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.badges.create(state.form);
      setState({ ...state.form, loading: true });
      console.log(state);
    } catch (error) {}
    // try {
    //   e.preventDefault();
    //   await api.badges.create(state.form);
    //   setState({ loading: false });
    // } catch (error) {
    //   setState({ loading: false, error });
    // }
  };

  return (
    <>
      <div className="BadgeNew__hero">
        <img className="img-fluid BadgeNew__hero-image" src={platziconf} alt="" />
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
              avatar="https://www.gravatar.com/avatar/105e460b479e2e5b48aec07710c08d50?r=pg"
            />
          </div>
          <div className="col-6">
            <BadgeForm onChange={handleChange} onSubmit={handleSubmit} formValues={state.form} />
          </div>
        </div>
      </div>
    </>
  );
}
