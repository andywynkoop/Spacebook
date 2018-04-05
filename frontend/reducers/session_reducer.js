import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

const _nullSession = {
  currentUser: null
};

export default (state = _nullSession, action) => {
  console.log(action);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const newState = Object.assign({}, state);
      newState.currentUser = action.user;
      return newState;
    case LOGOUT_CURRENT_USER:
      console.log('reducer hit');
      return _nullSession;
    default:
      return state;
  }
};
