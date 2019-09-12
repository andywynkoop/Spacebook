import { connect } from 'react-redux';
import { fetchFeed } from '../actions/post';
import PostsList from './posts/PostsList';
import { currentUser, sortFeed } from '../util/selectors';

const msp = state => ({
  posts: sortFeed(state),
  currentUser: currentUser(state),
  user: currentUser(state)
});

const mdp = dispatch => ({
  fetchAction: id => dispatch(fetchFeed(id))
});

export default connect(msp, mdp)(PostsList);
