import { receiveCurrentUser, receiveErrors } from './session';
import * as FriendshipApiUtil from '../util/friendship_api_util';

export const requestFriendship = friendship => dispatch =>
  FriendshipApiUtil.requestFriend(friendship).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const approveFriendship = friendshipId => dispatch =>
  FriendshipApiUtil.approveRequest(friendshipId).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const denyFriendship = friendshipId => dispatch =>
  FriendshipApiUtil.deleteRequest(friendshipId).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
