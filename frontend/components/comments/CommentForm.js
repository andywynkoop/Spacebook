import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/comment';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ''
    };
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }
  submit() {
    const { postId: post_id, user: { id: author_id } } = this.props;
    const { body } = this.state;

    this.props.addComment({ author_id, post_id, body });
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
        <div style={{ backgroundImage: `url("${user.profileImgUrl}")` }} />
        <textarea
          type="text"
          placeholder="Write a comment..."
          value={this.state.body}
          onChange={this.update('body')}
          onKeyPress={this.handleKeyPress}
        />
      </form>
    );
  }
}

const mapStateToProps = ({ session: { currentUser: user } }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(addComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
