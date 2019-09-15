import * as API from '../util/chat_api_util';

export const RECEIVE_CHATS = "RECEIVE_CHATS";
export const RECEIVE_CHAT = "RECEIVE_CHAT";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const fetchChats = () => dispatch => 
  API.fetchChats().then(payload => dispatch({ type: RECEIVE_CHATS, payload }));

export const startChat = chat => API.startChat(chat)

export const receiveChat = payload => ({ type: RECEIVE_CHAT, payload });

export const sendMessage = message => API.sendMessage(message);

export const receiveMessage = payload => ({ type: RECEIVE_MESSAGE, payload });