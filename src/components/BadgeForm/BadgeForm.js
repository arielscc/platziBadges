import React from 'react';

export default function BadgeForm({ onChange, formValues, onSubmit }) {
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">First Name</label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            name="firstName"
            value={formValues.firstName}
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Last Name</label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            name="lastName"
            value={formValues.lastName}
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            name="email"
            value={formValues.email}
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Job Title</label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            name="jobTitle"
            value={formValues.jobTitle}
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Twitter</label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            name="twitter"
            value={formValues.twitter}
            autoComplete="off"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}
