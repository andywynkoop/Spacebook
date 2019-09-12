import { RECEIVE_POST, RECEIVE_FEED_POSTS, RECEIVE_WALL_POSTS } from "../actions/post";

export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_POST:
    case RECEIVE_FEED_POSTS:
    case RECEIVE_WALL_POSTS:
      return Object.assign({}, state, action.payload.postCommentMap);
    default:
      return state;
  }
}