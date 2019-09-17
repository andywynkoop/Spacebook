import { RECEIVE_CHAT, RECEIVE_CHATS } from '../actions/chat';

export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CHATS:
    case RECEIVE_CHAT:
      return Object.assign({}, state, (action.payload.messages || {}));
    default:
      return state;
  }
}