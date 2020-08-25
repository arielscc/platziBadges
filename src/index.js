// const creatEl = document.createElement('h1');
// creatEl.innerText = 'Hello platzi Badgets,!!';

// const container = document.querySelector('#app');

// container.appendChild(creatEl);

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

// import { Badge } from './components/Badge/Badge';
// import { BadgeNew } from './pages/BadgeNew';
import Badges from './pages/Badges';

// const element = <h1>Hola platzi badgets :D 🎉🎉</h1>;
const container = document.querySelector('#app');

// ReactDOM.render(__que__, __donde__);
ReactDOM.render(
  <div>
    <Badges />
  </div>,
  container
);
