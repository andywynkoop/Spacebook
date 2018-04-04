import * as SessionApi from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const signup => formUser => dispatch =>
  SessionApi.signup(formUser).then(user => dispatch(receiveCurrentUser(user)))

export const login => formUser => dispatch =>
  SessionApi.signin(formUser).then(user => dispatch(receiveCurrentUser(user)))

export const logout => () => dispatch =>
  SessionApi.logout().then(() => dispatch(removeCurrentUser())) 
