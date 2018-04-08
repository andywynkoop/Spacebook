import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  requestFriendship,
  approveFriendship,
  denyFriendship
} from '../../actions/friendship';

class FriendButton extends Component {
  constructor(props) {
    super(props);
    this.buttonAttributes = this.buttonAttributes.bind(this);
  }
  buttonAttributes() {
    const {
      currentUser: { friendshipData: data },
      match: { params: { userUrl } },
      user: { id },
      requestFriendship,
      approveFriendship,
      cancelRequest
    } = this.props;
    const { currentUser } = this.props;

    // debug
    //the current user is looking at their own page
    if (userUrl === currentUser.userUrl) {
      return {
        label: 'Update Info',
        action: () => console.log('Update info here')
      };
    } else if (data.friends[id]) {
      // the current uses is looking at a friend's page
      return {
        label: '✓ Friends',
        action: () => console.log("You're already friends!")
      };
    } else if (data.requestsTo[id]) {
      //the current user is looking at a person they've requested
      return {
        label: '✓ Requested',
        action: () => cancelRequest(data.requestsTo[id].id)
      };
    } else if (data.requestsFrom[id]) {
      //the current user is looking at a person who's requested them
      return {
        label: '+ Approve',
        action: () => approveFriendship(data.requestsFrom[id].id)
      };
    } else {
      //the current user has no requests associated with this user
      return {
        label: '+ Add Friend',
        action: () =>
          requestFriendship({
            requesting_user_id: currentUser.id,
            requested_user_id: id
          })
      };
    }
  }

  render() {
    const { label, action } = this.buttonAttributes();
    if (!label) return <div />;
    return (
      <div className="gray-page-button friend-button" onClick={action}>
        {label}
      </div>
    );
  }
}

const mapStateToProps = ({ session: { currentUser } }) => ({
  currentUser
});

const mapDispatchToProps = dispatch => ({
  requestFriendship: friendship => dispatch(requestFriendship(friendship)),
  approveFriendship: friendshipId => dispatch(approveFriendship(friendshipId)),
  cancelRequest: friendshipId => dispatch(denyFriendship(friendshipId))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(FriendButton)
);
