import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChats } from '../../actions/chat'
import { chatList, messagesUnderChatId } from '../../util/selectors';


class MessagesModal extends Component {
  componentDidMount() {
    this.props.fetchChats();
  }
  
  render = () =>
    <div className="modal-box">
      <div className="white-modal-triangle message-tri" />
      <h3 className="modal-header">Messages</h3>
      <ul>
        {this.props.chats.map(chat => 
          <li>{chat.name}</li>
        )}
      </ul>
    </div>
}

const msp = state => ({
  chats: chatList(state),
  messages: messagesUnderChatId(state)
})

const mdp = dispatch => ({
  fetchChats: () => dispatch(fetchChats())
})

export default connect(msp,mdp)(MessagesModal);