import React, { Component } from 'react';
import PostCreateContainer from './PostCreateContainer';

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchAction(this.props.user.id);
  }
  renderPostsList() {
    const { posts } = this.props;
    if (!posts) return <div />;
    return Object.values(posts).map(post => <li key={post.id}>{post.body}</li>);
  }
  render() {
    const { user, currentUser, posts } = this.props;
    console.log(user);
    console.log(currentUser);
    console.log(posts);
    return (
      <div className="item-container-post">
        <PostCreateContainer postAuthorId={currentUser.id} wallId={user.id} />
        <ul>{this.renderPostsList.bind(this)()}</ul>
      </div>
    );
  }
}

export default PostsList;
