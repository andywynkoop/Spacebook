import { RECEIVE_USER } from '../actions/user';
import { RECEIVE_CURRENT_USER } from '../actions/session';
import { RECEIVE_WALL_POSTS, RECEIVE_FEED_POSTS } from '../actions/post';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
    case RECEIVE_CURRENT_USER:
      const { payload } = action;
      const { user } = payload;
      const userFriendships = payload.userFriendships || {};
      const friendRequests = payload.friendRequests || {};
      const friends = userFriendships.friends || {};
      const requestors = friendRequests.users;
      return Object.assign({}, state, user, friends, requestors);
    case RECEIVE_FEED_POSTS:
    case RECEIVE_WALL_POSTS:
      return Object.assign({}, state, action.payload.users);
    case RECEIVE_SEARCH_RESULTS:
      const users = action.payload.users || {};
      return Object.assign({}, state, users);
    default:
      return state;
  }
};
