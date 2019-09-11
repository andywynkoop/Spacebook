import * as CommentApiUtil from '../util/comment_api_util';
import { RECEIVE_POST } from './post';

export const addComment = comment => dispatch =>
  CommentApiUtil.addComment(comment).then(post => dispatch({
    type: RECEIVE_POST,
    post
  }));

export const updateComment = comment => dispatch =>
  CommentApiUtil.updateComment(comment).then(post =>
    dispatch({
      type: RECEIVE_POST,
      post
    })
  );

export const deleteComment = id => dispatch =>
  CommentApiUtil.deleteComment(id).then(post => dispatch({
    type: RECEIVE_POST,
    post
  }));
