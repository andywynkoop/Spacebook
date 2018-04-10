import React, { Component } from 'react';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';

class Comments extends Component {
  render() {
    const { post, comments } = this.props;
    return (
      <div className="comments">
        <CommentsList comments={comments} />
        <CommentForm post={post} />
      </div>
    );
  }
}

export default Comments;
