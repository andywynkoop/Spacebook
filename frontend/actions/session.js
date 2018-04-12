import * as SessionApiUtils from '../util/session_api_util';
import { fetchAllUsers } from './user';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const signup = formUser => dispatch =>
  SessionApiUtils.signup(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const login = formUser => dispatch =>
  SessionApiUtils.login(formUser).then(
    user => {
      dispatch(receiveCurrentUser(user));
      dispatch(fetchAllUsers());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => dispatch =>
  SessionApiUtils.logout().then(() => dispatch(logoutCurrentUser()));

export const fetchCurrentUser = () => dispatch =>
  SessionApiUtils.fetchCurrentUser().then(user =>
    dispatch(receiveCurrentUser(user))
  );

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
