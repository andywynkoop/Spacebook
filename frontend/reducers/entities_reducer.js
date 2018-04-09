import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import userIdMapReducer from './user_id_map_reducer';
import feedReducer from './feed_reducer';
import postsReducer from './posts_reducer';

export default combineReducers({
  users: usersReducer,
  userIdMap: userIdMapReducer,
  feed: feedReducer,
  posts: postsReducer
});
