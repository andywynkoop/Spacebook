import { combineReducers } from 'redux';
import users from './users_reducer';
import userIdMap from './user_id_map_reducer';
import feed from './feed_reducer';
import posts from './posts_reducer';
import trending from './trending_reducer';
import userFriendshipMap from './user_friendship_map_reducer';
import comments from './comments_reducer';
import postCommentMap from './post_comment_map_reducer';
import friendRequestTo from './friend_request_to_reducer';
import friendRequestFrom from './friend_request_from_reducer';
import search from './users_search_reducer';
import chats from './chats_reducer';
import messages from './messages_reducer';

export default combineReducers({
  users,
  userFriendshipMap,
  userIdMap,
  feed,
  posts,
  trending,
  comments,
  postCommentMap,
  friendRequestTo,
  friendRequestFrom,
  search,
  chats,
  messages
});
