import React, { Component } from 'react';

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
    const { user, posts } = this.props;
    console.log(user);
    console.log(posts);
    return (
      <div className="item-container-post">
        <PostCreateContainer
          postCreator={currentUser.id}
          targetWall={user.id}
        />
        <ul>{this.renderPostsList.bind(this)()}</ul>
      </div>
    );
  }
}

export default PostsList;
