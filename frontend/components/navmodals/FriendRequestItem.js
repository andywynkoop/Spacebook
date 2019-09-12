import React, { Component } from 'react';
import { connect } from 'react-redux';
import { approveFriendship, denyFriendship } from '../../actions/friendship';

class FriendRequestItem extends Component {
  render() {
    const { request, approve, deny } = this.props;
    if (request === null) {
      return (
        <div className="request-item null-request">
          <p>No new requests</p>
        </div>
      );
    }
    const { user } = request;
    return (
      <div className="request-item">
        <div className="modal-user-info">
          <img src={user.profileImgUrl} className="modal-img" />
          <p className="modal-user-name">
            {user.firstname} {user.lastname}
          </p>
        </div>
        <div className="modal-buttons-container">
          <button
            className="modal-btn modal-approve-btn"
            onClick={() => approve(request.id)}
          >
            + Approve{' '}
          </button>
          <button className="modal-btn" onClick={() => deny(request.id)}>
            {' '}
            Remove{' '}
          </button>
        </div>
      </div>
    );
  }
}

const mdp = dispatch => ({
  approve: id => dispatch(approveFriendship(id)),
  deny: id => dispatch(denyFriendship(id))
});

export default connect(null, mdp)(FriendRequestItem);
