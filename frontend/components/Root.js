import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import App from './App';

const Root = ({ preloadedState }) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(reduxThunk)
  );

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
