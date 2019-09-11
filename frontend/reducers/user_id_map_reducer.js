import { RECEIVE_USER } from '../actions/user';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      const newState = Object.assign({}, state);
      const user = Object.values(action.payload.user)[0];
      const { userUrl, id } = user;
      newState[userUrl] = id;
      return newState;
    default:
      return state;
  }
};
