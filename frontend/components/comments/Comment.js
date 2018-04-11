import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentHoverModal from './CommentHoverModal';
import CommentOptionsModal from '../posts/PostOptionsModal';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      edit: false
    };
    this.handleClick = this.handleClick.bind(this);
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
    if (type==="delete")
  }
  render() {
    const { data, author, currentUser, post } = this.props;
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
          <CommentHoverModal />
          <CommentOptionsModal
            edit={() => this.setType('edit')}
            destroy={() => this.setType('destroy')}
            status={this.state.modal}
            currentUser={currentUser}
            authorId={data.author_id}
            postAuthorId={post.author.id}
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
  update: comment => dispatch(updateComment(id))
})
export default connect(mapStateToProps)(Comment);
