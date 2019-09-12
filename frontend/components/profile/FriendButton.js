import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  requestFriendship,
  denyFriendship
} from '../../actions/friendship';
import { 
  currentUser, 
  userHasRequestFrom, 
  userHasRequestedFriendship, 
  userIsFriendsWith
} from '../../util/selectors';

class FriendButton extends Component {
  friendButton(label, action) {
    return (
      <div className="gray-page-button friend-button" onClick={action}>
        {label}
      </div>
    );
  }

  render() {
    const {
      pending,
      approvableRequest,
      alreadyFriends,
      ownPage,
      userId,
      loading,
      currentUser,
      request,
      cancel
    } = this.props;

    if (loading) return false;
    if (!currentUser) return null;

    if (ownPage) {
      return this.friendButton('Update Info', () => { })
    } else if (alreadyFriends) {
      return this.friendButton('✓ Friends', () => { })
    } else if (pending) {
      return this.friendButton('✓ Requested', () => cancel(data.requestsTo[id].id))
    } else if (approvableRequest) {
      return this.friendButton('+ Approve', () => request(approvableRequest.requestorId))
    } else {
      return this.friendButton('+ Add Friend', () => request(userId))
    }  
  }
}

const msp = (state, { user: { id }}) => ({
  currentUser: currentUser(state),
  pending: userHasRequestedFriendship(state, id),
  approvableRequest: userHasRequestFrom(state, id),
  alreadyFriends: userIsFriendsWith(state, id),
  ownPage: state.session.id === id,
  loading: !id,
  userId: id
});

const mdp = dispatch => ({
  request: targetUserId => dispatch(requestFriendship(targetUserId)),
  cancel: friendshipId => dispatch(denyFriendship(friendshipId))
});

export default connect(msp, mdp)(FriendButton);
