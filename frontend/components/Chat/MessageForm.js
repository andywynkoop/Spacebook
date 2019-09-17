import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/chat';

class MessageForm extends Component {
  state = { body: '' }

  update = e => this.setState({ body: e.target.value })

  submit = e => {
    e.preventDefault();
    const chatId = this.props.chat ? this.props.chat.id : null;
    const message = {
      body: this.state.body,
      chat_id: chatId,
      friend_id: this.props.friend.id
    };

    this.setState({ body: '' }, () => 
      this.props.sendMessage(message));
  }

  render = () =>
    <form onSubmit={this.submit}>
      <input 
        type="text" 
        value={this.state.body}
        onChange={this.update}
        placeholder="Type a message..."
      />
    </form>
}

const mdp = dispatch => ({
  sendMessage: message => sendMessage(message)
});

export default connect(null, mdp)(MessageForm);