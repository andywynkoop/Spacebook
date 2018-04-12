import React, { Component } from 'react';
import NavMain from './NavMain';
import FeedPostsContainer from './FeedPostsContainer';

class Feed extends Component {
  render() {
    const { currentUser, logout } = this.props;
    return (
      <div>
        <NavMain currentUser={currentUser} logout={logout} />
        <div className="feed-container">
          <div className="feed">
            <FeedPostsContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
