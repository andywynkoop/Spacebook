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
        <div className="item-container item-container-post">
          This will be the post form
        </div>
        <ul>{this.renderPostsList.bind(this)()}</ul>
      </div>
    );
  }
}

export default PostsList;
