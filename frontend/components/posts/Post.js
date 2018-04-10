import React, { Component } from 'react';
import Comments from '../comments/Comments';

class Post extends Component {
  render() {
    const { data, author } = this.props;
    if (!author) return <div />;
    return (
      <li className="item-container item-container-post post">
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
        <Comments postId={data.id} comments={data.comments} />
      </li>
    );
  }
}

export default Post;
