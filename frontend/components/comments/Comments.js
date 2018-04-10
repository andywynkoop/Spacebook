import React, { Component } from 'react';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';

class Comments extends Component {
  render() {
    const { postId, comments } = this.props;
    console.log(comments);
    return (
      <div className="comments">
        <CommentsList comments={comments} />
        <CommentForm postId={postId} />
      </div>
    );
  }
}

export default Comments;
