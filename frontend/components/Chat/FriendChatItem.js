import React from 'react';
import { connect } from 'react-redux';
import { ADD_CHAT_MODAL } from '../../reducers/chat_modal_list_reducer';

const FriendChatItem = ({ friend, openChat }) =>
  <li className="friend-chat-item" onClick={openChat}>
    <img src={friend.profileImgUrl} />
    <p>{friend.firstname} {friend.lastname}</p>
    <span>&#183;</span>
  </li>;

const mdp = (dispatch, { friend }) => ({
  openChat: () => dispatch({ type: ADD_CHAT_MODAL, id: friend.id })
});

export default connect(null, mdp)(FriendChatItem);