import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentHoverModal from './CommentHoverModal';
import CommentOptionsModal from '../posts/PostOptionsModal';
import CommentForm from './CommentForm';
import { deleteComment } from '../../actions/comment';
import { fetchWallPosts, fetchFeed } from '../../actions/post';
import { Link, withRouter } from 'react-router-dom';
import { NULL_PROFILE } from '../../util/img_util';
import { userByUserId, currentUser } from '../../util/selectors';

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
      const { id: commentId } = this.props.data;
      this.props.destroy(commentId);
    }
  }
  hideForm() {
    this.setState({ edit: false });
  }
  commentModalBtn() {
    const { currentUser, data, post } = this.props;
    if (currentUser.id === data.authorId) {
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
        <img src={author.profileImgUrl || NULL_PROFILE} />
        <p>
          <Link to={`${author.userUrl}`}>
            <span className="comment-author">
              {author.firstname} {author.lastname}
            </span>
          </Link>{' '}
          {data.body}
        </p>
        <div className="comment-modal-container">
          {this.commentModalBtn()}
          <CommentOptionsModal
            edit={() => this.setType('edit')}
            destroy={() => this.setType('destroy')}
            status={this.state.modal}
            currentUser={currentUser}
            authorId={data.authorId}
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

const msp = (state, { data }) => ({
  author: userByUserId(state, data.authorId),
  currentUser: currentUser(state)
});

const mdp = dispatch => ({
  destroy: id => dispatch(deleteComment(id))
});

export default connect(msp, mdp)(
  withRouter(Comment)
);