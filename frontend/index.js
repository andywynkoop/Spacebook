import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUser) {
    const user = Object.values(window.currentUser)[0];
    preloadedState = {
      session: {
        id: user.id
      },
      entities: {
        users: {
          [user.id]: user
        }
      }
    }
  }

  ReactDOM.render(
    <Root preloadedState={preloadedState} />,
    document.querySelector('#root')
  );
});
