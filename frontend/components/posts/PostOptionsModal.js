import React, { Component } from 'react';

class PostOptionsModal extends Component {
  canEdit() {
    const { currentUser: { id }, data, edit } = this.props;
    if (id === data.authorId)
      return (
        <p onClick={edit}>
          <i className="fas fa-edit" />
          {' Edit...'}
        </p>
      );
  }
  canDelete() {
    const { currentUser: { id }, data, destroy } = this.props;
    if (id === data.authorId || id === data.wallId)
      return (
        <p onClick={destroy}>
          <i className="fas fa-trash-alt" />
          {' Delete...'}
        </p>
      );
  }
  render() {
    const { status } = this.props;
    if (!status) return <div />;
    return (
      <div className="post-modal">
        {this.canEdit()}
        {this.canDelete()}
      </div>
    );
  }
}

export default PostOptionsModal;
