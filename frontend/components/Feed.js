import React, { Component } from 'react';
import NavMain from './NavMain';

class Feed extends Component {
  render() {
    const { session: { currentUser }, logout } = this.props;
    const message = !!currentUser
      ? `This is the feed page for the current user with email: ${
          currentUser.email
        }`
      : 'Not logged in';
    return (
      <div>
        <NavMain currentUser={currentUser} logout={logout} />
        <h1>{message}</h1>
      </div>
    );
  }
}

export default Feed;
