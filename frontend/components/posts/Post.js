import React, { Component } from 'react';
import Comments from '../comments/Comments';
import PostOptionsModal from './PostOptionsModal';
import PostActionModal from './PostActionModal';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost, fetchWallPosts } from '../../actions/post';

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
    console.log('Edit here');
  }
  destroy() {
    const { destroy, fetchPosts, data: { id, wallId } } = this.props;
    this.setState({ actionType: null }, () => {
      destroy(id).then(() => {
        fetchPosts(wallId);
      });
    });
  }
  close() {
    this.setState({ actionType: null });
  }
  render() {
    const { data, author } = this.props;
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
              style={{ backgroundImage: `url("${author.profileImgUrl}")` }}
              className="post-profile-img"
            />
          </Link>
          <div>
            <h3 className="post-profile-author">
              <Link to={`/${author.userUrl}`}>
                {author.firstname} {author.lastname}
              </Link>
            </h3>
            <p className="post-date">
              {new Date(data.createdAt).toDateString()}
            </p>
          </div>
        </div>
        <p className="post-body">{data.body}</p>
        <Comments post={data} comments={data.comments} />
        <PostOptionsModal
          edit={() => this.setType('edit')}
          destroy={() => this.setType('destroy')}
          status={this.state.modal}
        />
        <button className="post-modal-btn">···</button>
        <PostActionModal
          data={data}
          type={this.state.actionType}
          swap={swapType}
          edit={edit}
          destroy={destroy}
          close={close}
        />
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  destroy: id => dispatch(deletePost(id)),
  fetchPosts: id => dispatch(fetchWallPosts(id))
});

export default connect(null, mapDispatchToProps)(withRouter(Post));
