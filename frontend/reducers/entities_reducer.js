import { combineReducers } from 'redux';
import users from './users_reducer';
import userIdMap from './user_id_map_reducer';
import feed from './feed_reducer';
import posts from './posts_reducer';
import trending from './trending_reducer';
import userFriendshipMap from './user_friendship_map_reducer';
import comments from './comments_reducer';

export default combineReducers({
  users,
  userFriendshipMap,
  userIdMap,
  feed,
  posts,
  trending,
  comments
});
