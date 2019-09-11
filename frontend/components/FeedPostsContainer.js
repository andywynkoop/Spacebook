import { connect } from 'react-redux';
import { fetchFeed } from '../actions/post';
import PostsList from './posts/PostsList';

const sort = posts => posts.sort((p1, p2) => {
  if (p1.createdAt < p2.createdAt) return 1;
  return -1;
});

const mapStateToProps = (state) => {
  const { users, feed } = state.entities;
  const posts = sort(Object.values(feed));
  const { id } = state.session;
  const currentUser = users[id];
  return ({
    posts,
    users,
    currentUser,
    user: currentUser
  });
}

const mapDispatchToProps = dispatch => ({
  fetchAction: id => dispatch(fetchFeed(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
