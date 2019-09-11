import { connect } from 'react-redux';
import PostsList from './PostsList';
import { fetchWallPosts } from '../../actions/post';

const sort = posts => posts.sort((p1, p2) => {
  if (p1.createdAt < p2.createdAt) return 1;
  return -1;
});

const msp = (state, { user, currentUser }) => {
  let { posts, users } = state.entities;
  posts = sort(Object.values(posts));
  return ({
    posts,
    users,
    user,
    currentUser
  })
}

const mdp = dispatch => ({
  fetchAction: id => dispatch(fetchWallPosts(id))
});

export default connect(msp, mdp)(PostsList);
