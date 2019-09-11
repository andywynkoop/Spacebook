import { RECEIVE_FEED_POSTS, RECEIVE_POST } from '../actions/post';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POST:
      const { post } = action.payload;
      return Object.assign({}, state, { [post.id]: post });
    case RECEIVE_FEED_POSTS:
      return action.payload.posts || {};
    default:
      return state;
  }
};
