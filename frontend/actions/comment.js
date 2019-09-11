import * as CommentApiUtil from '../util/comment_api_util';
import { RECEIVE_POST } from './post';

export const addComment = comment => dispatch =>
  CommentApiUtil.addComment(comment).then(payload => dispatch({
    type: RECEIVE_POST,
    payload
  }));

export const updateComment = comment => dispatch =>
  CommentApiUtil.updateComment(comment).then(payload =>
    dispatch({
      type: RECEIVE_POST,
      payload
    })
  );

export const deleteComment = id => dispatch =>
  CommentApiUtil.deleteComment(id).then(payload => dispatch({
    type: RECEIVE_POST,
    payload
  }));
