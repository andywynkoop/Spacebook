import React, { Component } from 'react';
import { connect } from 'react-redux';
import { friendsOfCurrentUser, currentUser } from '../../util/selectors';
import { OPEN_CHAT_MODAL } from '../../reducers/chat_modal_reducer';
import ChatSidebar from './ChatSidebar';
import ChatModalList from './ChatModalList';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { receiveChat, fetchChats, receiveMessage } from '../../actions/chat';

class Chat extends Component {
  componentDidMount() {
    this.props.fetchChats();
  }

  render() {
    const { 
      currentUser,
      chatModalOpen, 
      openChatModal, 
      numFriends, 
      receiveChat, 
      allChats, 
      receiveMessage 
    } = this.props;

    return(
      <div>
        <ActionCableConsumer
          channel={{ channel: 'ChatsChannel', user_id: currentUser.id }}
          onReceived={receiveChat}
        />
        {allChats.map(chat => (
          <ActionCableConsumer
            key={chat.id}
            channel={{ channel: 'MessagesChannel', chat: chat.id }}
            onReceived={receiveMessage}
          />
        ))}
        {chatModalOpen
          ? <ChatSidebar />
          : <div className="chat-modal" onClick={openChatModal}>
              Chat ({numFriends})
            </div>}
        <ChatModalList />
      </div>
    );
  }
}


const msp = state => ({
  currentUser: currentUser(state),
  chatModalOpen: state.ui.chatModal,
  numFriends: friendsOfCurrentUser(state).length,
  allChats: Object.values(state.entities.chats)
});

const mdp = dispatch => ({
  fetchChats: () => dispatch(fetchChats()),
  openChatModal: () => dispatch({ type: OPEN_CHAT_MODAL }),
  receiveChat: payload => dispatch(receiveChat(payload)),
  receiveMessage: payload => dispatch(receiveMessage(payload))
});

export default connect(msp, mdp)(Chat);