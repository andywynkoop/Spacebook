import { RECEIVE_CHATS, RECEIVE_CHAT } from "../actions/chat";

const defaultState = {
  friendToChat: {},
  chatToFriend: {}
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_CHATS:
      return Object.assign({}, state, (action.payload.chatFriendMap || {}));
    case RECEIVE_CHAT:
      const { id, payload } = action;
      const { senderId, chatId, receiverId } = payload.chatFriendMap;
      const oldFriendToChat = state.friendToChat || {};
      const oldChatToFriend = state.chatToFriend || {};
      let friendId;
      if(id == senderId){
        friendId = receiverId;
      } else {
        friendId = senderId;
      }
      const friendToChat = Object.assign({}, oldFriendToChat, { [friendId]: chatId });
      const chatToFriend = Object.assign({}, oldChatToFriend, { [chatId]: friendId });
      return ({
        friendToChat,
        chatToFriend
      });
    default:
      return state;
  }
}