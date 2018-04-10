import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post';
import PostForm from './PostForm';

const mapStateToProps = (state, { postAuthorId, author, wallId, refresh }) => ({
  post: { body: '' },
  postAuthorId,
  author,
  wallId,
  refresh
});

const mapDispatchToProps = dispatch => ({
  action: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
