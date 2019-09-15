export const ADD_CHAT_MODAL = "ADD_CHAT_MODAL";
export const REMOVE_CHAT_MODAL = "REMOVE_CHAT_MODAL";

export default (state={}, action) => {
  switch(action.type) {
    case ADD_CHAT_MODAL:
      return Object.assign({}, state, { [action.id]: true });
    case REMOVE_CHAT_MODAL:
      const newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}