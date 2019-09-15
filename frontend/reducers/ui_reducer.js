import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import chatModal from './chat_modal_reducer';
import chatModalList from './chat_modal_list_reducer';

export default combineReducers({
  modal: modalReducer,
  chatModal,
  chatModalList
});
