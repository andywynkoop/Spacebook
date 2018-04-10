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
    return Object.values(posts)
      .sort((p1, p2) => {
        if (p1.createdAt < p2.createdAt) return 1;
        return -1;
      })
      .map(post => (
        <Post key={post.id} data={post} author={users[post.authorId]} />
      ));
  }
  render() {
    const { user, currentUser, posts } = this.props;
    console.log(posts);
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
