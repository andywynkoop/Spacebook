import React, { Component } from 'react';

class PostModal extends Component {
  render() {
    const { edit, destroy, status } = this.props;
    if (!status) return <div />;
    return (
      <div className="post-modal">
        <p onClick={edit}>
          <i className="fas fa-edit" />
          {' Edit...'}
        </p>
        <p onClick={destroy}>
          <i className="fas fa-trash-alt" />
          {' Delete...'}
        </p>
      </div>
    );
  }
}

export default PostModal;
