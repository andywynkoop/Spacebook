import React, { Component } from 'react';

class FriendRequestItem extends Component {
  render() {
    const { data, approve, deny, user } = this.props;
    console.log(data);
    console.log(user);
    if (data === null)
      return (
        <div className="request-item null-request">
          <p>No new requests</p>
        </div>
      );
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
            onClick={() => approve(data.id)}
          >
            + Approve{' '}
          </button>
          <button className="modal-btn" onClick={() => deny(data.id)}>
            {' '}
            Remove{' '}
          </button>
        </div>
      </div>
    );
  }
}

export default FriendRequestItem;
