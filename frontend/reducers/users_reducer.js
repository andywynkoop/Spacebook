import { RECEIVE_USER, RECEIVE_ALL_USERS } from '../actions/user';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const newState = Object.assign({}, state);
      const { user } = action;
      newState[user.id] = user;
      return newState;
    case RECEIVE_ALL_USERS:
      return action.users;
    default:
      return state;
  }
};
