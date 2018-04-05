import { RECEIVE_ERRORS } from '../actions/session';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return [];
  }
};
