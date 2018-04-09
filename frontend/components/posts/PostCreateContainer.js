import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post';
import PostForm from './PostForm';

const mapStateToProps = (state, { postAuthorId, wallId }) => ({
  post: { body: '' },
  postAuthorId,
  wallId
});

const mapDispatchToProps = dispatch => ({
  action: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
