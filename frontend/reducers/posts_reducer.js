import { RECEIVE_POST, RECEIVE_WALL_POSTS } from '../actions/post';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  let wall;
  switch (action.type) {
    case RECEIVE_POST:
      const { post } = action;
      wall = post.wallId;
      newState[wall][post.id] = post;
      return newState;
    case RECEIVE_WALL_POSTS:
      const { posts } = action;
      const postIds = Object.keys(posts);
      if (postIds.length === 0) return newState;
      wall = posts[postIds[0]].wallId;
      newState[wall] = posts;
      return newState;
    default:
      return state;
  }
};
