import * as SessionApi from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const signup = formUser => dispatch =>
  SessionApi.signup(formUser).then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch =>
  SessionApi.login(formUser).then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => {
  console.log('action');
  SessionApi.logout().then(() => dispatch(logoutCurrentUser()));
};

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});
