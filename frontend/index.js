import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = window.currentUser
    ? {
        session: {
          id: window.currentUser.id
        },
        entities: {
          users: {
           [currentUser.id]: currentUser
          }
        }
      }
    : {};
  ReactDOM.render(
    <Root preloadedState={preloadedState} />,
    document.querySelector('#root')
  );
});
