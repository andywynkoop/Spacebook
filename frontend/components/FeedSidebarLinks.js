import React from 'react';
import { Link } from 'react-router-dom';

const DeadLink = ({ icon, label, disabled }) => 
  <li className={disabled ? 'disabled': ''}>
    <div className="feed-link-left">
      <i className={icon} /> <span>{label}</span>
    </div>
    <span className="feed-ellipse">···</span>
  </li>;

const FeedSidebarLinks = ({ currentUser: user }) => 
  <div>
    <ul className="feed-sidebar-links">
      <li className="feed-profile-link">
        <Link to={`/${user.userUrl}`}>
          <img src={user.profileImgUrl} />{' '}
          <p>{user.firstname} {user.lastname}</p>
        </Link>
        <span className="feed-ellipse">···</span>
      </li>
      <DeadLink icon="far fa-newspaper" label="News Feed" />
      <a href="https://github.com/andywynkoop" target="_blank">
        <DeadLink icon="fab fa-github" label="Github"/>
      </a>
      <DeadLink icon="far fa-comment" label="Messenger" disabled/>
      <DeadLink icon="fas fa-camera" label="Photos" disabled/>
      <DeadLink icon="far fa-calendar" label="Events" disabled/>
      <DeadLink icon="far fa-file-alt" label="Pages" disabled/>
    </ul>
  </div>;

export default FeedSidebarLinks;
