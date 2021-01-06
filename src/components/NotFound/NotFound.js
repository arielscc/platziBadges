import React from 'react';
import Lottie from 'react-lottie';
import * as Error from './404.json';

import './notFound.css';
import logo from '../../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: Error.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="notFound">
      <div className="notFound__content">
        <img src={logo} alt="" />
        <p>¡Te perdiste en tu aventura!</p>
        <Link to="/" className="button">
          Volver
        </Link>
      </div>
      <div className="logoNotFound">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
}
