import React from 'react';
import { connect } from 'react-redux';
import { createPost, fetchWallPosts, fetchFeed } from '../../actions/post';
import PostForm from './PostForm';

const mapStateToProps = (
  { session: { currentUser } },
  { postAuthorId, author, wallId, wall }
) => ({
  currentUser,
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
  fetchPosts: id => dispatch(fetchWallPosts(id)),
  fetchFeed: id => dispatch(fetchFeed(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
