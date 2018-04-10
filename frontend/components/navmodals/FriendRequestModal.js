import React, { Component } from 'react';
import { connect } from 'react-redux';
import { approveFriendship, denyFriendship } from '../../actions/friendship';
import FriendRequestItem from './FriendRequestItem';

class FriendRequestModal extends Component {
  constructor(props) {
    super(props);
    this.renderRequestList = this.renderRequestList.bind(this);
  }
  renderRequestList() {
    const { requests, approve, deny, users } = this.props;

    if (requests.length === 0) return <FriendRequestItem data={null} />;
    return requests.map(request => (
      <FriendRequestItem
        key={request.id}
        data={request}
        approve={approve}
        deny={deny}
        user={users[request.requesting_user_id]}
      />
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

const mapStateToProps = ({
  session: { currentUser },
  entities: { users }
}) => ({
  requests: Object.values(currentUser.friendshipData.requestsFrom).filter(
    el => el.approved === false
  ),
  users
});

const mapDispatchToProps = dispatch => ({
  approve: id => dispatch(approveFriendship(id)),
  deny: id => dispatch(denyFriendship(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestModal);
