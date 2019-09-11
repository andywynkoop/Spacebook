import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session';
import { fetchFeed } from '../actions/post';
import PostsList from './posts/PostsList';

const mapStateToProps = (state) => {
  const { users, feed:posts } = state.entities;
  const { id } = state.session;
  return ({
    posts,
    users,
    user: users[id],
    currentUser: users[id]
  });
}

const mapDispatchToProps = dispatch => ({
  fetchAction: id => dispatch(fetchFeed(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
