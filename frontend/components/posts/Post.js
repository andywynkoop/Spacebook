import React, { Component } from 'react';
import Comments from '../comments/Comments';
import PostOptionsModal from './PostOptionsModal';
import PostActionModal from './PostActionModal';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post';
import { NULL_PROFILE } from '../../util/img_util';
import { currentUser, userByUserId, commentsByPostId } from '../../util/selectors';

class Post extends Component {
  state = {
    modal: false,
    actionType: null
  }

  handleClick = e => {
    const { target: { className } } = e;
    if (className === 'post-modal-btn') {
      this.setState({ modal: !this.state.modal });
    } else {
      this.setState({ modal: false });
    }
  }

  setType = actionType => this.setState({ actionType });

  swapType = () => {
    const actionType = this.state.actionType === 'edit' ? 'delete' : 'edit';
    this.setState({ actionType });
  }

  destroy = () => {
    const {
      destroy,
      post: { id }
    } = this.props;

    this.setState({ actionType: null }, () => {
      destroy(id)
    });
  }

  close = () => this.setState({ actionType: null })

  postModalBtn = () => {
    const { currentUser, post } = this.props;
    if (currentUser.id === post.authorId || currentUser.id === post.wallId)
      return <button className="post-modal-btn">···</button>;
  }

  renderAuthorDetails = () => {
    const { author, wall } = this.props;
    if (this.props.history.location.pathname !== '/' || author.id === wall.id) {
      return (
        <Link to={`/${author.userUrl}`}>
          {author.firstname} {author.lastname}
        </Link>
      );
    } else {
      return (
        <div>
          <Link to={`/${author.userUrl}`}>
            {author.firstname} {author.lastname}
          </Link>{' '}
          <i
            className="fas fa-caret-right"
            style={{ margin: '0px 5px', textDecoration: 'none' }}
          />{' '}
          <Link to={`/${wall.user_url}`}>
            {wall.firstname} {wall.lastname}
          </Link>
        </div>
      );
    }
  }

  render() {
    const { post, author, currentUser, comments } = this.props;
    const { swapType, destroy, close } = this;
    if (!author) return <div />;
    return (
      <li
        className="item-container item-container-post post"
        onClick={this.handleClick}
      >
        <div className="post-header">
          <Link to={`/${author.userUrl}`}>
            <div
              style={{
                backgroundImage: `url("${author.profileImgUrl ||
                  NULL_PROFILE}")`
              }}
              className="post-profile-img"
            />
          </Link>
          <div>
            <h3 className="post-profile-author">
              {this.renderAuthorDetails()}
            </h3>
            <p className="post-date">
              {new Date(post.createdAt).toDateString()}
            </p>
          </div>
        </div>
        <p className="post-body">{post.body}</p>
        <Comments post={post} comments={comments} />
        <PostOptionsModal
          edit={() => this.setType('edit')}
          destroy={() => this.setType('destroy')}
          status={this.state.modal}
          currentUser={currentUser}
          authorId={post.authorId}
          postAuthorId={post.wallId}
          comment={''}
        />
        {this.postModalBtn()}
        <PostActionModal
          post={post}
          type={this.state.actionType}
          swap={swapType}
          destroy={destroy}
          close={close}
          author={author}
        />
      </li>
    );
  }
}

const msp = (state, { post }) => {
  return ({
    currentUser: currentUser(state),
    author: userByUserId(state, post.authorId),
    wall: userByUserId(state, post.wallId),
    comments: commentsByPostId(state, post.id)
  });
}


const mdp = dispatch => ({
  destroy: id => dispatch(deletePost(id))
});

export default connect(msp, mdp)(withRouter(Post));
