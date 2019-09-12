import { RECEIVE_CURRENT_USER, receiveErrors } from './session';
import * as FriendshipApiUtil from '../util/friendship_api_util';

export const requestFriendship = targetUserId => dispatch =>
  FriendshipApiUtil.requestFriend(targetUserId).then(
    payload => dispatch({
      type: RECEIVE_CURRENT_USER,
      payload
    }),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const approveFriendship = friendshipId => dispatch =>
  FriendshipApiUtil.approveRequest(friendshipId).then(
    payload => dispatch({
      type: RECEIVE_CURRENT_USER,
      payload
    }),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const denyFriendship = friendshipId => dispatch =>
  FriendshipApiUtil.deleteRequest(friendshipId).then(
    payload => dispatch({
      type: RECEIVE_CURRENT_USER,
      payload
    }),
    err => dispatch(receiveErrors(err.responseJSON))
  );
