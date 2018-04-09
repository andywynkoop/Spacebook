import * as UserApi from '../util/user_api_util.js';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const fetchUser = userUrl => dispatch =>
  UserApi.fetchUser(userUrl).then(userData => dispatch(receiveUser(userData)));

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchAllUsers = () => dispatch =>
  UserApi.fetchAllUsers().then(users => {
    console.log(users);
    dispatch(receiveAllUsers(users));
  });

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});
