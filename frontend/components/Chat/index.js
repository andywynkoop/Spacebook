import React from 'react';
import { connect } from 'react-redux';
import { friendsOfCurrentUser } from '../../util/selectors';
import { OPEN_CHAT_MODAL } from '../../reducers/chat_modal_reducer';
import ChatSidebar from './ChatSidebar';
import ChatModalList from './ChatModalList';

const Chat = ({ chatModalOpen, openChatModal, numFriends }) =>
  <div>
    {chatModalOpen
      ? <ChatSidebar />
      : <div className="chat-modal" onClick={openChatModal}>
        Chat ({numFriends})
        </div>}
    <ChatModalList />
  </div>;


const msp = state => ({
  chatModalOpen: state.ui.chatModal,
  numFriends: friendsOfCurrentUser(state).length
});

const mdp = dispatch => ({
  openChatModal: () => dispatch({ type: OPEN_CHAT_MODAL })
});

export default connect(msp, mdp)(Chat);