import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {
  render() {
    const { data, author } = this.props;
    return (
      <div className="comment">
        <img src={author.profileImgUrl} />
        <p>
          <span className="comment-author">
            {author.firstname} {author.lastname}
          </span>{' '}
          {data.body}
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ entities: { users } }, { data }) => ({
  author: users[data.author_id]
});
export default connect(mapStateToProps)(Comment);
