import React from 'react';
import { connect } from 'react-redux';
import { approveFriendship, denyFriendship } from '../../actions/friendship';
import { Link } from 'react-router-dom';

const FriendRequestItem = ({ request, approve, deny }) => {
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
        <Link to={`/${user.userUrl}`}>
          <p className="modal-user-name">
            {user.firstname} {user.lastname}
          </p>
        </Link>
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


const mdp = dispatch => ({
  approve: id => dispatch(approveFriendship(id)),
  deny: id => dispatch(denyFriendship(id))
});

export default connect(null, mdp)(FriendRequestItem);
