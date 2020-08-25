import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Badge from '../components/Badge/Badge';

import imgHeader from '../images/badge-header.svg';

import './BadgeNew.css';
import BadgeForm from '../components/BadgeForm/BadgeForm';

export const BadgeNew = () => {
  const [state, setState] = useState({
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
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
  return (
    <div>
      <Navbar />
      <div className="BadgeNew__hero">
        <img src={imgHeader} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={firstName}
              lastName={lastName}
              jobTitle={jobTitle}
              twitter={twitter}
              email={email}
              avatar="https://www.gravatar.com/avatar/105e460b479e2e5b48aec07710c08d50?r=pg"
            />
          </div>
          <div className="col-6">
            <BadgeForm onChange={handleChange} formValues={state.form} />
          </div>
        </div>
      </div>
    </div>
  );
};
