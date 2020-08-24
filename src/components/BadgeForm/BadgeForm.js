import React, { useState } from 'react';

export default function BadgeForm() {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  });
  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });

    // console.log({
    //   name: e.target.name,
    //   value: e.target.value,
    // });
  };

  const handleClick = () => {
    console.log('se accionó el boton');
  };
  return (
    <div>
      <h2>New Attendant</h2>
      <form onSubmit={e => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="">First Name</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            name="firstName"
            value={input.firstName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Last Name</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            name="lastName"
            value={input.lastName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            name="email"
            value={input.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Job Title</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            name="jobTitle"
            value={input.jobTitle}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Twitter</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            name="twitter"
            value={input.twitter}
          />
        </div>

        <button onClick={handleClick} className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}
