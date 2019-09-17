import * as API from '../util/chat_api_util';

export const RECEIVE_CHATS = "RECEIVE_CHATS";
export const RECEIVE_CHAT = "RECEIVE_CHAT";

export const fetchChats = () => dispatch => 
  API.fetchChats().then(payload => {
    dispatch({ type: RECEIVE_CHATS, payload })
  })

export const receiveChat = payload => (dispatch, getState) => {
  dispatch({ 
    type: RECEIVE_CHAT, 
    payload: JSON.parse(payload), 
    id: getState().session.id
  });
};

export const sendMessage = message => {
  return API.sendMessage(message);
}

export const receiveMessage = payload => (dispatch, getState) => {
  dispatch({
    type: RECEIVE_CHAT,
    payload: JSON.parse(payload),
    id: getState().session.id
  });
};