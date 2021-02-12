/* eslint-disable react/jsx-filename-extension */

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';

import gon from 'gon';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const container = document.querySelector('#chat');
ReactDOM.render(<App gon={gon} />, container);

console.log('it works!');
console.log('gon', gon);
