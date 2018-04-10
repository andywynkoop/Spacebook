import React, { Component } from 'react';
import PostCreateContainer from './PostCreateContainer';
import Post from './Post';

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchAction(this.props.user.id);
  }
  renderPostsList() {
    const { posts, users } = this.props;
    if (!posts || !users) return <div />;
    console.log(users);
    return Object.values(posts).map(post => (
      <Post key={post.id} data={post} author={users[post.authorId]} />
    ));
  }
  render() {
    const { user, currentUser, posts } = this.props;
    return (
      <div className="item-container-post">
        <PostCreateContainer
          postAuthorId={currentUser.id}
          author={currentUser}
          wallId={user.id}
        />
        <ul>{this.renderPostsList.bind(this)()}</ul>
      </div>
    );
  }
}

export default PostsList;
