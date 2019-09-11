import React from 'react';
import NavMain from './NavMain';
import FeedPostsContainer from './FeedPostsContainer';
import Trending from './Trending';
import FeedSidebarLinks from './FeedSidebarLinks';
import { connect } from 'react-redux';

const Feed = ({ currentUser }) =>
  <div>
    <NavMain currentUser={currentUser} />
    <div className="feed-container">
      <FeedSidebarLinks currentUser={currentUser} />
      <div className="feed">
        <FeedPostsContainer />
      </div>
      <Trending />
    </div>
  </div>

const msp = state => ({
  currentUser: state.entities.users[state.session.id]
});

export default connect(msp)(Feed);
