import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    console.log(currentUser);
  }
  ReactDOM.render(<Root />, document.querySelector('#root'));
});
