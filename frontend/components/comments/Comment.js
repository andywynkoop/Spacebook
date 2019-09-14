import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentHoverModal from './CommentHoverModal';
import CommentOptionsModal from '../posts/PostOptionsModal';
import CommentForm from './CommentForm';
import { deleteComment } from '../../actions/comment';
import { Link, withRouter } from 'react-router-dom';
import { NULL_PROFILE } from '../../util/img_util';
import { userByUserId, currentUser } from '../../util/selectors';

class Comment extends Component {
  state = {
    modal: false,
    edit: false
  };

  handleClick = e => {
    const { target: { className } } = e;
    if (className === 'comment-modal-btn') {
      this.setState({ modal: !this.state.modal });
    } else {
      this.setState({ modal: false });
    }
  }

  setType = type => () => {
    if (type === 'edit') this.setState({ edit: true });
    if (type === 'destroy') {
      const { id: commentId } = this.props.comment;
      this.props.destroy(commentId);
    }
  }

  hideForm = () => this.setState({ edit: false })

  commentModalBtn() {
    const { currentUser, comment, post } = this.props;
    if (currentUser.id === comment.authorId) {
      return <CommentHoverModal message={'Edit or delete this'} version="v2" />;
    } else if (currentUser.id === post.wallId) {
      return <CommentHoverModal message={'Remove this'} />;
    }
  }

  render() {
    const { comment, author, currentUser, post } = this.props;
    if (this.state.edit)
      return (
        <CommentForm
          post={post}
          formType="edit"
          commentId={comment.id}
          body={comment.body}
          hideForm={this.hideForm}
        />
      );
    return (
      <div className="comment" onClick={this.handleClick}>
        <img src={author.profileImgUrl || NULL_PROFILE} />
        <p>
          <Link to={`${author.userUrl}`}>
            <span className="comment-author">
              {author.firstname} {author.lastname}
            </span>
          </Link>{' '}
          {comment.body}
        </p>
        <div className="comment-modal-container">
          {this.commentModalBtn()}
          <CommentOptionsModal
            edit={this.setType('edit')}
            destroy={this.setType('destroy')}
            status={this.state.modal}
            currentUser={currentUser}
            authorId={comment.authorId}
            postAuthorId={author.id}
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

const msp = (state, { comment }) => ({
  author: userByUserId(state, comment.authorId),
  currentUser: currentUser(state)
});

const mdp = dispatch => ({
  destroy: id => dispatch(deleteComment(id))
});

export default connect(msp, mdp)(
  withRouter(Comment)
);