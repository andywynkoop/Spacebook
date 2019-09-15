export const OPEN_CHAT_MODAL = "OPEN_CHAT_MODAL";
export const CLOSE_CHAT_MODAL = "CLOSE_CHAT_MODAL";

export default (state = false, action) => {
  switch(action.type) {
    case OPEN_CHAT_MODAL:
      return true;
    case CLOSE_CHAT_MODAL:
      return false;
    default:
      return state;
  }
};