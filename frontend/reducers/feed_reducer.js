import { RECEIVE_FEED_POSTS } from '../actions/post';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_FEED_POSTS:
      console.log(action.posts);
      return action.posts;
    default:
      return state;
  }
};
