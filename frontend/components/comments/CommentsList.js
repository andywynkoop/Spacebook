import React from 'react';
import Comment from './Comment';

const CommentsList = ({ comments, post }) => 
  <ul>
    {comments.map(comment => (
      <Comment
        comment={comment}
        post={post}
        key={comment.id}
      />
    ))}
  </ul>;

export default CommentsList;
