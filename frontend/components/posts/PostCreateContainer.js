import React from 'react';
import { connect } from 'react-redux';
import { createPost, fetchWallPosts } from '../../actions/post';
import PostForm from './PostForm';

const mapStateToProps = (state, { postAuthorId, author, wallId, wall }) => ({
  post: { body: '' },
  postAuthorId,
  author,
  wallId,
  wall,
  formType: 'Make Post',
  message: 'Post',
  close: () => {}
});

const mapDispatchToProps = dispatch => ({
  action: post => dispatch(createPost(post)),
  fetchPosts: id => dispatch(fetchWallPosts(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
