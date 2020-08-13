// const creatEl = document.createElement('h1');
// creatEl.innerText = 'Hello platzi Badgets,!!';

// const container = document.querySelector('#app');

// container.appendChild(creatEl);

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import { Badge } from './components/Badge/Badge';

// const element = <h1>Hola platzi badgets :D 🎉🎉</h1>;
const container = document.querySelector('#app');

// ReactDOM.render(__que__, __donde__);
ReactDOM.render(
  <div>
    <Badge
      firstName="Ariel"
      lastName="Chura"
      title="Frontend Developer"
      twitter="arielscc"
      avatar="https://www.gravatar.com/avatar/105e460b479e2e5b48aec07710c08d50?r=pg"
    />
    <Badge
      firstName="Miguel"
      lastName="Garcia"
      title="Frontend Developer"
      twitter="arielscc"
      avatar="https://www.gravatar.com/avatar/105e460b479e2e5b48aec07710c08d50?r=pg"
    />
  </div>,
  container
);
