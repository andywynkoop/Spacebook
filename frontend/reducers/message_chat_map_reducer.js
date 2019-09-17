import { RECEIVE_CHATS, RECEIVE_CHAT } from "../actions/chat";

export default (state={}, action) => {
  switch(action.type) {
    case RECEIVE_CHATS:
    case RECEIVE_CHAT:
      return Object.assign({}, state, action.payload.messageChatMap || {});
    default:
      return state;
  }
}