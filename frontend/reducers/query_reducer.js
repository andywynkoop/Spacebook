import { SET_QUERY } from '../actions/ui';

export default (state = '', action) => {
  switch (action.type) {
    case SET_QUERY:
      return action.query;
    default:
      return state;
  }
};
