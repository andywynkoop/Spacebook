import { RECEIVE_USER } from '../actions/user';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USER:
      const { user: { userUrl, id } } = action;
      newState[userUrl] = id;
      return newState;
    default:
      return state;
  }
};
