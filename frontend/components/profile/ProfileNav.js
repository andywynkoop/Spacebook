import React, { Component } from 'react';
import FriendButton from './FriendButton';
import MessageButton from './MessageButton';
const NULL_PROFILE =
  'http://res.cloudinary.com/dmynah8jz/image/upload/c_scale,w_653/v1523046075/no_face.png';

class NavMain extends Component {
  render() {
    const { profile, name, currentUser } = this.props;
    return (
      <nav className="profile-nav">
        <div className="profile-img">
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
        <FriendButton data={currentUser.friendshipData} />
        <MessageButton />
      </nav>
    );
  }
}

export default NavMain;
