import React from 'react';
import { connect } from 'react-redux';
import PostsList from '../PostsList';
import { fetchWallPosts } from '../../actions/post';

const ProfilePosts = ({ user }) => <PostsList user={user} />;

const mapStateToProps = ({ entities: { posts } }, ownProps) => ({
  posts: posts[ownProps.user.id]
});

const mapDispatchToProps = dispatch => ({
  fetchAction: id => dispatch(fetchWallPosts(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
