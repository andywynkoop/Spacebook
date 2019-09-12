import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendRequestItem from './FriendRequestItem';
import { friendRequests } from '../../util/selectors';

class FriendRequestModal extends Component {
  renderRequestList() {
    const { requests } = this.props;
    if (requests.length === 0) return <FriendRequestItem request={null} />;
    return requests.map(request => (
      <FriendRequestItem key={request.id} request={request} />
    ));
  }

  render() {
    return (
      <div className="modal-box">
        <div className="modal-triangle" />
        <div className="modal-header">
          <h3 className="modal-title">Friend Requests</h3>
          <div className="modal-links">
            <p className="pseudo-link">{'Find Friends · '}</p>
            <p className="pseudo-link">{' Settings'}</p>
          </div>
        </div>
        <ul className="modal-list">{this.renderRequestList()}</ul>
      </div>
    );
  }
}

const msp = state => ({
  requests: friendRequests(state)
});

export default connect(msp)(FriendRequestModal);
