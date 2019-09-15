import React from 'react';
import { connect } from 'react-redux';
import { openChats } from '../../util/selectors';
import { REMOVE_CHAT_MODAL } from '../../reducers/chat_modal_list_reducer';

const ChatModalList = ({ openChats, remove }) =>
  <ul className="chat-modals">
    {openChats.map(friend => (
      <li key={friend.id}>
        <img src={friend.profileImgUrl} />
        <p>{friend.firstname} {friend.lastname}</p>
        <button onClick={() => remove(friend.id)}></button>
      </li>
    ))}
  </ul>

const msp = state => ({
  openChats: openChats(state),
});

const mdp = dispatch => ({
  remove: id => dispatch({ type: REMOVE_CHAT_MODAL, id })
})

export default connect(msp, mdp)(ChatModalList);