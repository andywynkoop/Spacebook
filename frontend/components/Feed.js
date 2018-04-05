import React, { Component } from 'react';
import NavMain from './NavMain';
import image from '../../app/assets/images/no_face.png';

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
        <img src={image} />
      </div>
    );
  }
}

export default Feed;
