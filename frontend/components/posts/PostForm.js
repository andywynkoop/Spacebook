import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { postAuthorId: author_id, wallId: wall_id } = this.props;
    const { body } = this.state;
    this.props.action({
      author_id,
      wall_id,
      body
    });
  }
  render() {
    const { author } = this.props;
    return (
      <div className="item-container item-container-post post-form">
        <div className="post-form-header">
          <p>Make Post</p>
          {' | '}
          <p>Photo/Video</p>
          {' | '}
          <p>Live Video</p>
          {' | '}
          <p>Life Event</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="post-form-input">
            <div
              style={{ backgroundImage: `url("${author.profileImgUrl}")` }}
              className="post-profile-img"
            />
            <input
              type="text"
              placeholder={`What's on your mind?`}
              value={this.state.body}
              onChange={this.update('body')}
            />
          </div>
          <div className="post-form-buttons">
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
