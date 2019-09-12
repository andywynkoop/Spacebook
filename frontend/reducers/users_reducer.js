import { RECEIVE_USER } from '../actions/user';
import { RECEIVE_CURRENT_USER } from '../actions/session';

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
    default:
      return state;
  }
};
