import React from 'react';
import { connect } from 'react-redux';
import { updatePost, fetchWallPosts } from '../../actions/post';
import PostForm from './PostForm';

const mapStateToProps = (
  state,
  { body, postAuthorId, author, wallId, wall, close, id }
) => ({
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
  fetchPosts: id => dispatch(fetchWallPosts(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
