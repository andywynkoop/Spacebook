import React from 'react';
import { connect } from 'react-redux';
import { openChats } from '../../util/selectors';
import ChatModalItem from './ChatModalItem';

const ChatModalList = ({ openChats }) =>
  <ul className="chat-modals">
    {openChats.map(friend => (
      <ChatModalItem key={friend.id} friend={friend} />
    ))}
  </ul>

const msp = state => ({
  openChats: openChats(state),
});

export default connect(msp)(ChatModalList);