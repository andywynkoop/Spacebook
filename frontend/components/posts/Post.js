import React, { Component } from 'react';
import Comments from '../comments/Comments';
import PostOptionsModal from './PostOptionsModal';
import PostActionModal from './PostActionModal';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost, fetchWallPosts, fetchFeed } from '../../actions/post';
import { NULL_PROFILE } from '../../util/img_util';
import { currentUser, userByUserId, commentsByPostId } from '../../util/selectors';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      actionType: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.setType = this.setType.bind(this);
    this.swapType = this.swapType.bind(this);
    this.edit = this.edit.bind(this);
    this.destroy = this.destroy.bind(this);
    this.close = this.close.bind(this);
    this.postModalBtn = this.postModalBtn.bind(this);
  }
  handleClick(e) {
    const { target: { className } } = e;
    if (className === 'post-modal-btn') {
      this.setState({ modal: !this.state.modal });
    } else {
      this.setState({ modal: false });
    }
  }
  setType(actionType) {
    this.setState({ actionType });
  }
  swapType() {
    const actionType = this.state.actionType === 'edit' ? 'delete' : 'edit';
    this.setState({ actionType });
  }
  edit() {
    // edit
  }
  destroy() {
    const {
      destroy,
      data: { id }
    } = this.props;

    this.setState({ actionType: null }, () => {
      destroy(id)
    });
  }
  close() {
    this.setState({ actionType: null });
  }
  postModalBtn() {
    const { currentUser, data } = this.props;
    if (currentUser.id === data.authorId || currentUser.id === data.wallId)
      return <button className="post-modal-btn">···</button>;
  }
  renderAuthorDetails() {
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
    const { data, author, currentUser, comments } = this.props;
    const { swapType, edit, destroy, close } = this;
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
              {new Date(data.createdAt).toDateString()}
            </p>
          </div>
        </div>
        <p className="post-body">{data.body}</p>
        <Comments post={data} comments={comments} />
        <PostOptionsModal
          edit={() => this.setType('edit')}
          destroy={() => this.setType('destroy')}
          status={this.state.modal}
          currentUser={currentUser}
          authorId={data.authorId}
          postAuthorId={data.wallId}
          comment={''}
        />
        {this.postModalBtn()}
        <PostActionModal
          data={data}
          type={this.state.actionType}
          swap={swapType}
          edit={edit}
          destroy={destroy}
          close={close}
          author={author}
        />
      </li>
    );
  }
}

const msp = (state, { data }) => {
  return ({
    currentUser: currentUser(state),
    author: userByUserId(state, data.authorId),
    wall: userByUserId(state, data.wallId),
    comments: commentsByPostId(state, data.id)
  });
}


const mdp = dispatch => ({
  destroy: id => dispatch(deletePost(id))
});

export default connect(msp, mdp)(withRouter(Post));
