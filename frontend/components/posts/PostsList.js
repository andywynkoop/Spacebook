import React, { Component } from 'react';
import PostCreateContainer from './PostCreateContainer';
import Post from './Post';

class PostsList extends Component {
  componentDidMount() {
    const { fetchAction, user } = this.props;
    fetchAction(user.id);
  }

  render() {
    const { user, currentUser, posts } = this.props;
    if (!currentUser) return <div />;
    return (
      <div className="item-container-post">
        <PostCreateContainer
          postAuthorId={currentUser.id}
          author={currentUser}
          wall={user}
        />
        <ul>
          {posts.map(post => <Post key={post.id} data={post} />)}
        </ul>
      </div>
    );
  }
}

export default PostsList;
