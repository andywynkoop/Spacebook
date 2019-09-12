import React from 'react';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';

const Comments = ({ post, comments }) =>
  <div className="comments">
    <CommentsList comments={comments} post={post} />
    <CommentForm post={post} formType="create" body="" />
  </div>;

export default Comments;
