import * as UserApi from '../util/user_api_util.js';
import { receiveErrors } from './session';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const fetchUser = userUrl => dispatch =>
  UserApi.fetchUser(userUrl).then(
    userData => dispatch(receiveUser(userData)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchAllUsers = () => dispatch =>
  UserApi.fetchAllUsers().then(users => {
    dispatch(receiveAllUsers(users));
  });

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});
