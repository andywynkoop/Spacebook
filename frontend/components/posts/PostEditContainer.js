import React from 'react';
import { connect } from 'react-redux';
import { updatePost, fetchWallPosts, fetchFeed } from '../../actions/post';
import PostForm from './PostForm';

const mapStateToProps = (
  { session: { currentUser } },
  { body, postAuthorId, author, wallId, wall, close, id }
) => ({
  currentUser,
  post: { body: body },
  postAuthorId,
  author,
  wallId,
  wall,
  formType: 'Edit Post',
  message: 'Save',
  close: close,
  id
});

const mapDispatchToProps = dispatch => ({
  action: post => dispatch(updatePost(post)),
  fetchPosts: id => dispatch(fetchWallPosts(id)),
  fetchFeed: id => dispatch(fetchFeed(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
