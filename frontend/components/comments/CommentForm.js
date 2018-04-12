import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, updateComment } from '../../actions/comment';
import { fetchWallPosts, fetchFeed } from '../../actions/post';
import { NULL_PROFILE } from '../../util/img_util';

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
      post,
      post: { id: post_id },
      user: { id: author_id },
      addComment,
      saveComment,
      fetchPosts,
      fetchFeed,
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
    submitAction(commentData).then(() =>
      this.setState({ body: '' }, () => {
        fetchPosts(post.wallId).then(() => {
          fetchFeed(author_id);
          if (formType === 'edit') {
            hideForm();
          }
        });
      })
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    submit();
  }
  handleKeyPress(e) {
    if (e.key === 'Enter') this.submit();
  }
  render() {
    const { user } = this.props;
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
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

const mapStateToProps = (
  { session: { currentUser: user } },
  { body, formType, commentId }
) => ({
  user,
  body,
  formType,
  commentId
});

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(addComment(comment)),
  saveComment: comment => dispatch(updateComment(comment)),
  fetchPosts: id => dispatch(fetchWallPosts(id)),
  fetchFeed: id => dispatch(fetchFeed(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
