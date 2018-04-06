import * as UserApi from '../util/user_api_util.js';

export const RECEIVE_USER = 'RECEIVE_USER';

export const fetchUser = userUrl => dispatch =>
  UserApi.fetchUser(userUrl).then(userData => dispatch(receiveUser(userData)));

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
