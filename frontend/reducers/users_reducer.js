import { RECEIVE_USER } from '../actions/user';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const newState = Object.assign({}, state);
      const { user } = action;
      newState[user.id] = user;
      return newState;
    default:
      return state;
  }
};
