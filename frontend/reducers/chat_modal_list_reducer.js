import { RECEIVE_CHAT } from "../actions/chat";

export const ADD_CHAT_MODAL = "ADD_CHAT_MODAL";
export const REMOVE_CHAT_MODAL = "REMOVE_CHAT_MODAL";
export const COLLAPSE_CHAT_MODAL = "COLLAPSE_CHAT_MODAL";

export default (state={}, action) => {
  switch(action.type) {
    case ADD_CHAT_MODAL:
      return Object.assign({}, state, { [action.id]: true });
    case COLLAPSE_CHAT_MODAL:
      return Object.assign({}, state, { [action.id]: false });
    case REMOVE_CHAT_MODAL:
      const newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    case RECEIVE_CHAT:
      const { id, payload } = action;
      const { senderId } = payload.chatFriendMap;
      if (id != senderId) {
        return Object.assign({}, state, { [senderId]: true });
      }
    default:
      return state;
  }
}