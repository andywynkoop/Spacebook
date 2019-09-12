import React, { Component } from 'react';
import PostEditContainer from './PostEditContainer';

class PostActionModal extends Component {
  renderComponent() {
    const { data, type, swap, edit, destroy, close, author } = this.props;
    const { body, authorId, wallId, id } = data;
    if (type === 'edit')
      return (
        <PostEditContainer
          body={body}
          postAuthorId={authorId}
          author={author}
          wallId={wallId}
          close={close}
          id={id}
        />
      );
    return (
      <div className="post-delete-confirm">
        <h3>
          <span>Delete Post</span>
          <span onClick={close}>X</span>
        </h3>
        <div className="post-delete-warning">
          <p>
            <span>
              {
                "This post will be deleted and you won't be able to find it anymore.You can also edit this post, if you just want to change something."
              }
            </span>
            <span>
              {
                "If you didn't create this post, we can help you secure your account."
              }
            </span>
          </p>
        </div>
        <div className="post-delete-btns">
          <div className="btns-left">
            <button className="post-delete-btn btn-2" onClick={close}>
              Cancel
            </button>
          </div>
          <div className="btns-right">
            <button className="post-delete-btn btn-2" onClick={swap}>
              Edit Post
            </button>
            <button className="post-delete-btn" onClick={destroy}>
              Delete Post
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { type } = this.props;
    if (!type) return <div />;
    return (
      <div className="post-action-modal-container">
        <div className="post-action-modal">{this.renderComponent()}</div>
      </div>
    );
  }
}
export default PostActionModal;
