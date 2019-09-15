import React from 'react';
import { friendsOfCurrentUser } from '../../util/selectors';
import { CLOSE_CHAT_MODAL } from '../../reducers/chat_modal_reducer';
import { connect } from 'react-redux';
import FriendChatItem from './FriendChatItem';

const ChatSidebar = ({ closeChatModal, friends }) => 
  <div className="chat-sidebar">
    <button onClick={closeChatModal} />
    <h4>Contacts</h4>
    <ul>
      {friends.map(friend => (
        <FriendChatItem friend={friend} key={friend.id} />
      ))}
    </ul>
  </div>

const msp = state => ({
  friends: friendsOfCurrentUser(state)
});

const mdp = dispatch => ({
  closeChatModal: () => dispatch({ type: CLOSE_CHAT_MODAL })
});

export default connect(msp, mdp)(ChatSidebar);