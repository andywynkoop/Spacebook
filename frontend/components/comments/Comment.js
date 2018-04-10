import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="comment">
        <p>{data.body}</p>
      </div>
    );
  }
}

export default Comment;
