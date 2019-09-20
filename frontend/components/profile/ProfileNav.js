import React from 'react';
import FriendButton from './FriendButton';
import { NULL_PROFILE } from '../../util/img_util';
import MessageButton from './MessageButton';

const ProfileNav = ({ user, change }) => {
  const { profileImgUrl, firstname, lastname } = user;
  const name = `${firstname} ${lastname}`;
  return (
    <nav className="profile-nav">
      <div className="profile-img" onClick={change}>
        <img src={profileImgUrl || NULL_PROFILE} />
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
      <MessageButton user={user} />
    </nav>
  );
}

export default ProfileNav;