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
    return (
      <div className="item-container item-container-post">
        This will be the post form
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Write something..."
            value={this.state.body}
            onChange={this.update('body')}
          />
        </form>
      </div>
    );
  }
}

export default PostForm;
