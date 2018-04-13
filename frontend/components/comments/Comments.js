import React, { Component } from 'react';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';
import { withRouter } from 'react-router-dom';

class Comments extends Component {
  render() {
    const { post, comments } = this.props;
    return (
      <div className="comments">
        <CommentsList comments={comments} post={post} />
        <CommentForm post={post} formType="create" body="" />
      </div>
    );
  }
}

export default Comments;
