import { RECEIVE_CHAT, RECEIVE_CHATS } from '../actions/chat';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CHATS:
      return action.payload.chats;
    case RECEIVE_CHAT:
      return Object.assign({}, state, action.payload.chat);
    default:
      return state;
  }
}