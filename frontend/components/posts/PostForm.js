import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }
  submit() {
    const { postAuthorId: author_id, wallId: wall_id, id, close } = this.props;

    const { body } = this.state;
    this.props
      .action({
        id,
        author_id,
        wall_id,
        body
      })
      .then(() => {
        this.setState({ body: '' }, () => {
          this.props.fetchPosts(wall_id);
          close();
        });
      });
  }
  handleKeyPress(e) {
    if (e.key === 'Enter') this.submit();
  }
  handleSubmit(e) {
    e.preventDefault();
    this.submit();
  }
  render() {
    const { author, formType, message, close } = this.props;
    const classType = formType === 'Edit Form' ? 'post-edit' : '';
    return (
      <div
        className={`item-container item-container-post post-form ${classType}`}
      >
        <div className="post-form-header">
          <p>{formType}</p>
          {' | '}
          <p>Photo/Video</p>
          {' | '}
          <p>Live Video</p>
          {' | '}
          <p>Life Event</p>
          {formType === 'Edit Post' ? (
            <button onClick={close} className="post-edit-close">
              X
            </button>
          ) : (
            <div />
          )}
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="post-form-input">
            <div
              style={{ backgroundImage: `url("${author.profileImgUrl}")` }}
              className="post-profile-img"
            />
            <textarea
              type="text"
              placeholder={`What's on your mind?`}
              value={this.state.body}
              onChange={this.update('body')}
              onKeyPress={this.handleKeyPress}
            />
          </div>
          <div className="post-form-buttons">
            <button type="submit">{message}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
