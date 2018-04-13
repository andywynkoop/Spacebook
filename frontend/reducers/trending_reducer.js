import { RECEIVE_ARTICLES } from '../actions/trending';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return action.articles;
    default:
      return state;
  }
};
