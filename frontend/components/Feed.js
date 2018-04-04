import React, { Component } from 'react';
import NavSession from './session/NavSession';

class Feed extends Component {
  render() {
    const { currentUser } = this.props.session;
    const message = !!currentUser
      ? `Logged in as ${currentUser.email}`
      : 'Not logged in';
    return (
      <div>
        <NavSession />
        <h1 onClick={this.props.logout}>{message}</h1>
      </div>
    );
  }
}

export default Feed;
