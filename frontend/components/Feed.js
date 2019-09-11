import React, { Component } from 'react';
import NavMain from './NavMain';
import FeedPostsContainer from './FeedPostsContainer';
import Trending from './Trending';
import FeedSidebarLinks from './FeedSidebarLinks';

class Feed extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <NavMain currentUser={currentUser} />
        <div className="feed-container">
          <FeedSidebarLinks />
          <div className="feed">
            <FeedPostsContainer />
          </div>
          <Trending />
        </div>
      </div>
    );
  }
}

export default Feed;
