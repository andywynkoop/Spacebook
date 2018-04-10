import React, { Component } from 'react';
import Comments from '../comments/Comments';
import PostModal from './PostModal';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const { target: { className } } = e;
    if (className === 'post-modal-btn') {
      this.setState({ modal: !this.state.modal });
    } else {
      this.setState({ modal: false });
    }
  }
  render() {
    const { data, author } = this.props;
    if (!author) return <div />;
    return (
      <li
        className="item-container item-container-post post"
        onClick={this.handleClick}
      >
        <div className="post-header">
          <div
            style={{ backgroundImage: `url("${author.profileImgUrl}")` }}
            className="post-profile-img"
          />
          <div>
            <h3 className="post-profile-author">
              {author.firstname} {author.lastname}
            </h3>
            <p className="post-date">
              {new Date(data.createdAt).toDateString()}
            </p>
          </div>
        </div>
        <p className="post-body">{data.body}</p>
        <Comments post={data} comments={data.comments} />
        <PostModal
          edit={() => console.log('edit')}
          destroy={() => console.log('destroy')}
          status={this.state.modal}
        />
        <button className="post-modal-btn">···</button>
      </li>
    );
  }
}

export default Post;
