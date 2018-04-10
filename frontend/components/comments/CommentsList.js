import React, { Component } from 'react';
import Comment from './Comment';

class CommentsList extends Component {
  render() {
    const { comments } = this.props;
    return (
      <ul>
        {Object.values(comments)
          .filter(el => typeof el !== 'number')
          .map(comment => <Comment data={comment} key={comment.created_at} />)}
      </ul>
    );
  }
}

export default CommentsList;
