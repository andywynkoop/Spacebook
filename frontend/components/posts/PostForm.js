import React, { Component } from 'react';
import { NULL_PROFILE } from '../../util/img_util';

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
    const {
      postAuthorId: author_id,
      wallId: wall_id,
      id,
      close,
      currentUser
    } = this.props;

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
          this.props.fetchFeed(currentUser.id);
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
  isFriend() {
    const { author, wall, formType } = this.props;
    if (formType === 'Edit Post') return true;
    return !!wall.friendshipData.friends[author.id] || wall.id === author.id;
  }
  render() {
    const { author, formType, message, close, wall } = this.props;
    if (!this.isFriend()) return <div />;
    const classType = formType === 'Edit Post' ? 'post-edit' : '';
    const profile =
      formType === 'Edit Post' ? author.profile_img_url : author.profileImgUrl;
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
              style={{ backgroundImage: `url("${profile || NULL_PROFILE}")` }}
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
