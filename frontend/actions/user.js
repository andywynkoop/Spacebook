import * as SessionApi from '../util/session_api_util';
import { receiveErrors } from './session';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const fetchUser = userUrl => dispatch =>
  SessionApi.fetchUser(userUrl).then(
    payload => dispatch({
      type: RECEIVE_USER,
      payload
    }),
    err => dispatch(receiveErrors(err.responseJSON))
  );
