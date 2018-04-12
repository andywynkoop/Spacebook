import React, { Component } from 'react';
import NavMain from './NavMain';
import FeedPostsContainer from './FeedPostsContainer';

class Feed extends Component {
  render() {
    const { currentUser, logout } = this.props;
    console.log('feed');
    return (
      <div>
        <NavMain currentUser={currentUser} logout={logout} />
        <div className="feed">
          <FeedPostsContainer />
        </div>
      </div>
    );
  }
}

export default Feed;
