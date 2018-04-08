import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = window.currentUser
    ? {
        session: {
          currentUser: window.currentUser
        }
      }
    : {};
  ReactDOM.render(
    <Root preloadedState={preloadedState} />,
    document.querySelector('#root')
  );
});
