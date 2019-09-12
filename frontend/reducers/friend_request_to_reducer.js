import { RECEIVE_CURRENT_USER } from "../actions/session";

export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const friendRequests = action.payload.friendRequests || {};
      return friendRequests.requestsTo || {};
    default:
      return state;
  }
}