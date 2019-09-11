import React, { Component } from 'react';
import Comment from './Comment';
import { withRouter } from 'react-router-dom';

class CommentsList extends Component {
  render() {
    const { comments, post } = this.props;
    return (
      <ul>
        {Object.values(comments)
          .filter(el => typeof el !== 'number')
          .map(comment => (
            <Comment 
              data={comment} 
              post={post} 
              key={comment.created_at} 
            />
          ))}
      </ul>
    );
  }
}

export default withRouter(CommentsList);
