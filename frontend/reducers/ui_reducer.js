import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import queryReducer from './query_reducer';

export default combineReducers({
  modal: modalReducer,
  query: queryReducer
});
