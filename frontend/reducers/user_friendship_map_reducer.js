import { RECEIVE_USER } from '../actions/user';
import { RECEIVE_CURRENT_USER } from '../actions/session';

export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER:
      const userFriendships = action.payload.userFriendships || {};
      const friendMap = userFriendships.friendMap || {};
      return Object.assign({}, state, friendMap);
    default: 
      return state;
  }
}