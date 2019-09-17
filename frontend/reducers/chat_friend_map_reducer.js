import { RECEIVE_CHATS, RECEIVE_CHAT } from "../actions/chat";

export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CHATS:
      return Object.assign({}, state, (action.payload.chatFriendMap || {}));
    case RECEIVE_CHAT:
      const { id, payload } = action;
      const { senderId, chatId, receiverId } = payload.chatFriendMap;
      if(id == senderId) {
        return Object.assign({}, state, { [receiverId]: chatId });
      } else {
        return Object.assign({}, state, { [senderId]: chatId });
      }
    default:
      return state;
  }
}