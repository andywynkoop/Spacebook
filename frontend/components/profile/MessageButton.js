import React from 'react';
import { connect } from 'react-redux';
import { ADD_CHAT_MODAL } from '../../reducers/chat_modal_list_reducer';

const MessageButton = ({ message, isCurrentUser }) => 
  isCurrentUser 
    ? null 
    : <div
        className="gray-page-button message-button"
        onClick={message}
      >
        Message
      </div>;
    
const msp = (state, ownProps) => ({
  isCurrentUser: ownProps.user.id == state.session.id
});

const mdp = (dispatch, ownProps) => ({
  message: () => dispatch({ type: ADD_CHAT_MODAL, id: ownProps.user.id })
});

export default connect(msp, mdp)(MessageButton);