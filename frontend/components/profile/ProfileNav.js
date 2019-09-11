import React, { Component } from 'react';
import FriendButton from './FriendButton';
import MessageButton from './MessageButton';
import { NULL_PROFILE } from '../../util/img_util';

class NavMain extends Component {
  render() {
    const { profile, name, currentUser, user, change } = this.props;
    return (
      <nav className="profile-nav">
        <div className="profile-img" onClick={change}>
          <img src={profile || NULL_PROFILE} />
        </div>
        <h1 className="profile-nav-header">{name}</h1>
        <ul className="profile-nav-items">
          <li>Timeline</li>
          <li>About</li>
          <li>Friends</li>
          <li>Photos</li>
          <li>
            More <i className="fas fa-caret-down" />
          </li>
        </ul>
        <FriendButton user={user} />
        <MessageButton />
      </nav>
    );
  }
}

export default NavMain;
