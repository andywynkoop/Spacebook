import { RECEIVE_CHAT, RECEIVE_CHATS, RECEIVE_MESSAGE } from '../actions/chat';

export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CHATS:
    case RECEIVE_CHAT:
      return action.payload.messages;
    case RECEIVE_MESSAGE:
    default:
      return state;
  }
}