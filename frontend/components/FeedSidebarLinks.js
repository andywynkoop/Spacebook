import React from 'react';
import { Link } from 'react-router-dom';

const DeadLink = ({ icon, label }) => 
  <li>
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
      <DeadLink icon="far fa-comment" label="Messenger" />
      <DeadLink icon="fas fa-camera" label="Photos" />
      <DeadLink icon="far fa-calendar" label="Events" />
      <DeadLink icon="far fa-file-alt" label="Pages" />
      <DeadLink icon="fab fa-github" label="Github" />
    </ul>
  </div>;

export default FeedSidebarLinks;
