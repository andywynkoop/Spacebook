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
      const friends = userFriendships.friends || {};
      return Object.assign({}, state, user, friends);
    default:
      return state;
  }
};
