// const creatEl = document.createElement('h1');
// creatEl.innerText = 'Hello platzi Badgets,!!';

// const container = document.querySelector('#app');

// container.appendChild(creatEl);

import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hola platzi badgets :D 🎉🎉</h1>;
const container = document.querySelector("#app");

// ReactDOM.render(__que__, __donde__);
ReactDOM.render(element, container);
