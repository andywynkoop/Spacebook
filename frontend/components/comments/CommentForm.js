import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, updateComment } from '../../actions/comment';
import { NULL_PROFILE } from '../../util/img_util';
import { withRouter } from 'react-router-dom';
import { currentUser } from '../../util/selectors';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: this.props.body
    };

    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }
  submit() {
    const {
      post: { id: post_id },
      user: { id: author_id },
      addComment,
      saveComment,
      formType,
      hideForm,
      commentId
    } = this.props;
    const { body } = this.state;
    const submitAction = formType === 'create' ? addComment : saveComment;
    let commentData = { author_id, post_id, body };
    if (formType === 'edit') {
      commentData.id = commentId;
    }
    this.setState({ body: '' }, () => {
      submitAction(commentData);
      if (formType === 'edit') {
        hideForm();
      }
    })
  }
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.submit();
    }
  }
  render() {
    const { user } = this.props;
    return (
      <form className="comment-form">
        <div
          style={{
            backgroundImage: `url("${user.profileImgUrl || NULL_PROFILE}")`
          }}
        />
        <textarea
          type="text"
          rows={1}
          placeholder="Write a comment..."
          value={this.state.body}
          onChange={this.update('body')}
          onKeyPress={this.handleKeyPress}
        />
      </form>
    );
  }
}

const msp = (state, { body, formType, commentId }) => ({
  user: currentUser(state),
  body,
  formType,
  commentId
})

const mdp = dispatch => ({
  addComment: comment => dispatch(addComment(comment)),
  saveComment: comment => dispatch(updateComment(comment))
});

export default connect(msp, mdp)(
  withRouter(CommentForm)
);
