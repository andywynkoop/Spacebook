import { RECEIVE_SEARCH_RESULTS } from '../actions/search';

export default (state = [], action) => {
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.payload.results || [];
    default:
      return state;
  }
}