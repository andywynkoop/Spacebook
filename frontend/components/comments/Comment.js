import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentHoverModal from './CommentHoverModal';
import CommentOptionsModal from '../posts/PostOptionsModal';
import CommentForm from './CommentForm';
import { deleteComment } from '../../actions/comment';
import { fetchWallPosts } from '../../actions/post';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      edit: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.setType = this.setType.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }
  handleClick(e) {
    const { target: { className } } = e;
    if (className === 'comment-modal-btn') {
      this.setState({ modal: !this.state.modal });
    } else {
      this.setState({ modal: false });
    }
  }
  setType(type) {
    if (type === 'edit') {
      this.setState({ edit: true });
    }
    if (type === 'destroy') {
      const { destroy, fetchPosts, data: { id: commentId }, post } = this.props;
      destroy(commentId).then(() => fetchPosts(post.wallId));
    }
  }
  hideForm() {
    this.setState({ edit: false });
  }
  commentModalBtn() {
    const { currentUser, data, post } = this.props;
    if (currentUser.id === data.author_id) {
      return <CommentHoverModal message={'Edit or delete this'} version="v2" />;
    } else if (currentUser.id === post.wallId) {
      return <CommentHoverModal message={'Remove this'} />;
    }
  }
  render() {
    const { data, author, currentUser, post } = this.props;
    if (this.state.edit)
      return (
        <CommentForm
          post={post}
          formType="edit"
          commentId={data.id}
          body={data.body}
          hideForm={this.hideForm}
        />
      );
    return (
      <div className="comment" onClick={this.handleClick}>
        <img src={author.profileImgUrl} />
        <p>
          <span className="comment-author">
            {author.firstname} {author.lastname}
          </span>{' '}
          {data.body}
        </p>
        <div className="comment-modal-container">
          {this.commentModalBtn()}
          <CommentOptionsModal
            edit={() => this.setType('edit')}
            destroy={() => this.setType('destroy')}
            status={this.state.modal}
            currentUser={currentUser}
            authorId={data.author_id}
            postAuthorId={post.author.id}
            wallId={post.wallId}
            comment={'comment-option'}
          >
            <div className="white-modal-triangle" />
          </CommentOptionsModal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (
  { entities: { users }, session: { currentUser } },
  { data }
) => ({
  author: users[data.author_id],
  currentUser
});

const mapDispatchToProps = dispatch => ({
  destroy: id => dispatch(deleteComment(id)),
  fetchPosts: id => dispatch(fetchWallPosts(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
