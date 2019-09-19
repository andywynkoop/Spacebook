import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChats } from '../../actions/chat'
import { chatList, messagesUnderChatId, dayAndMonth } from '../../util/selectors';
import { ADD_CHAT_MODAL } from '../../reducers/chat_modal_list_reducer';

class MessagesModal extends Component {  
  render = () =>
    <div className="modal-box messages">
      <div className="white-modal-triangle message-tri" />
      <h3 className="modal-header">Messages</h3>
      <ul className="modal-chat-list">
        {this.props.chats.map(chat => 
          <li key={chat.id} onClick={() => this.props.open(chat.friend.id)}>
            <img src={chat.friend.profileImgUrl} />
            <div>
              <h5>{chat.friend.firstname} {chat.friend.lastname}</h5>
              <p>
                {chat.lastMessageIsFromUser ? <i/> : null}
                {chat.lastMessage.body}
              </p>
            </div>
            <p>{dayAndMonth(chat.lastMessage.createdAt)}</p>
          </li>
        )}
      </ul>
    </div>
}

const msp = state => ({
  chats: chatList(state),
  messages: messagesUnderChatId(state)
})

const mdp = dispatch => ({
  fetchChats: () => dispatch(fetchChats()),
  open: id => dispatch({ type: ADD_CHAT_MODAL, id })
})

export default connect(msp,mdp)(MessagesModal);