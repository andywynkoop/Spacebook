import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ADD_CHAT_MODAL, COLLAPSE_CHAT_MODAL, REMOVE_CHAT_MODAL } from '../../reducers/chat_modal_list_reducer';
import MessageForm from './MessageForm';
import Message from './Message';
import { chatByFriendId, messagesByFriendId } from '../../util/selectors';

const CollapsedChat = ({ friend, expand, remove }) =>
  <li onClick={expand} className="collapsed">
    <img src={friend.profileImgUrl} />
    <p>{friend.firstname} {friend.lastname}</p>
    <button onClick={remove}></button>
  </li>;

class ExpandedChat extends Component {
  componentDidMount() {
    if (this.end) this.end.scrollIntoView({ behavior: "smooth" });
  }

  componentDidUpdate() {
    if (this.end) this.end.scrollIntoView({ behavior: "smooth" });
  }
  
  render() {
    const { friend, chat, collapse, messages, visit, remove } = this.props;
    return (
      <li className="expanded">
        <div onClick={collapse}>
          <img src={friend.profileImgUrl} />
          <p onClick={visit}>{friend.firstname} {friend.lastname}</p>
          <button onClick={remove}></button>
        </div>
        <ul className="messages-list">
          {messages.map(message =>
            <Message key={message.id} message={message} />
          )}
        <div ref={el => this.end = el} />
        </ul>
        <MessageForm chat={chat} friend={friend} />
      </li>
    )
  }
}
  

class ChatModalItem extends Component {
  render() {
    const { isCollapsed, friend, expand, remove, collapse, chat, messages, visit } = this.props;
    const collapsedProps = { friend, expand, remove };
    const expandedProps = { friend, collapse, messages, chat, visit, remove };
    if(isCollapsed) return <CollapsedChat {...collapsedProps} />
    return <ExpandedChat {...expandedProps} />
  }
}

const msp = (state, { friend }) => ({
  isCollapsed: !(state.ui.chatModalList[friend.id]),
  chat: chatByFriendId(state, friend.id),
  messages: messagesByFriendId(state, friend.id)
});

const mdp = (dispatch, { friend, history }) => ({
  expand: () => dispatch({ type: ADD_CHAT_MODAL, id: friend.id }),
  collapse: () => dispatch({ type: COLLAPSE_CHAT_MODAL, id: friend.id }),
  remove: e => {
    e.stopPropagation();
    dispatch({ type: REMOVE_CHAT_MODAL, id: friend.id })
  },
  visit: e => {
    e.stopPropagation();
    history.push(friend.userUrl);
  }
});

export default withRouter(connect(msp, mdp)(ChatModalItem));