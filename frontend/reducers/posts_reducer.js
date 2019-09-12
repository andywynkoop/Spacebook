import { RECEIVE_POST, RECEIVE_WALL_POSTS, REMOVE_POST } from '../actions/post';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POST:
      const { post } = action.payload;
      return Object.assign({}, state, { [post.id]: post });
    case RECEIVE_WALL_POSTS:
      return action.payload.posts || {};
    case REMOVE_POST:
      const newState = Object.assign({}, state);
      delete newState[action.payload.post.id];
      return newState;
    default:
      return state;
  }
};
