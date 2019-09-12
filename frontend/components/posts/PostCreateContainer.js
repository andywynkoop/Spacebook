import { connect } from 'react-redux';
import { createPost, fetchWallPosts, fetchFeed } from '../../actions/post';
import { currentUser, userIsFriendsWith } from '../../util/selectors';

import PostForm from './PostForm';

const msp = (state, { postAuthorId, author, wall }) => ({
  currentUser: currentUser(state),
  post: { body: '' },
  postAuthorId,
  author,
  wall,
  formType: 'Make Post',
  message: 'Post',
  close: () => { },
  isFriend: userIsFriendsWith(state, wall.id)
})

const mdp = dispatch => ({
  action: post => dispatch(createPost(post)),
  fetchPosts: id => dispatch(fetchWallPosts(id)),
  fetchFeed: id => dispatch(fetchFeed(id))
});

export default connect(msp, mdp)(PostForm);
