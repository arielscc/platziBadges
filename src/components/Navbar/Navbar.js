import React from 'react';
import logo from '../../images/logo.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <Link to="/" className="Navbar__brand">
          <img src={logo} alt="Logo platzi conf" className="Navbar__brand-logo" />
          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-bold">Conf</span>
        </Link>
      </div>
    </div>
  );
}
