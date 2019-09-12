import React, { Component } from 'react';

class PostOptionsModal extends Component {
  canEdit() {
    const { currentUser: { id }, authorId, edit } = this.props;
    if (id === authorId)
      return (
        <p onClick={edit}>
          <i className="fas fa-edit" />
          {' Edit...'}
        </p>
      );
  }
  
  canDelete() {
    const {
      currentUser: { id },
      authorId,
      postAuthorId,
      destroy,
      wallId
    } = this.props;

    if (id === authorId || id === postAuthorId || id === wallId)
      return (
        <p onClick={destroy}>
          <i className="fas fa-trash-alt" />
          {' Delete...'}
        </p>
      );
  }

  render() {
    const { status, comment } = this.props;
    if (!status) return <div />;
    return (
      <div className={`post-modal ${comment}`}>
        {this.canEdit()}
        {this.canDelete()}
        {this.props.children}
      </div>
    );
  }
}

export default PostOptionsModal;