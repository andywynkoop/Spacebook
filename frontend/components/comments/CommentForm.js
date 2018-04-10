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
  }
  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }
  submit(e) {
    e.preventDefault();
    const { postId: post_id, user: { id: author_id } } = this.props;
    const { body } = this.state;

    this.props.addComment({ author_id, post_id, body });
  }
  render() {
    const { user } = this.props;
    return (
      <form className="comment-form" onSubmit={this.submit}>
        <div style={{ backgroundImage: `url("${user.profileImgUrl}")` }} />
        <input
          type="text"
          placeholder="Write a comment..."
          value={this.state.body}
          onChange={this.update('body')}
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
