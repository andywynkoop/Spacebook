import { connect } from 'react-redux';
import PostsList from './PostsList';
import { fetchWallPosts } from '../../actions/post';
import { sortPosts } from '../../util/selectors';

const msp = (state, { user, currentUser }) => ({
  posts: sortPosts(state),
  users: state.entities.users,
  user,
  currentUser
})

const mdp = dispatch => ({
  fetchAction: id => dispatch(fetchWallPosts(id))
});

export default connect(msp, mdp)(PostsList);
