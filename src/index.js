/* eslint-disable react/jsx-filename-extension */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';

import gon from 'gon';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import UserNameContext from './UserNameContext';
import getUserName from './getUserName';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const container = document.querySelector('#chat');
ReactDOM.render(
  <UserNameContext.Provider value={getUserName()}>
    <App gon={gon} />
  </UserNameContext.Provider>,
  container,
);

console.log('it works!');
console.log('gon', gon);
