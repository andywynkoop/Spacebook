import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import App from './App';

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
