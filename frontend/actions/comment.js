import * as CommentApiUtil from '../util/comment_api_util';
import { receivePost } from './post';

export const addComment = comment => dispatch =>
  CommentApiUtil.addComment(comment).then(post => dispatch(receivePost(post)));

export const updateComment = comment => dispatch =>
  CommentApiUtil.updateComment(comment).then(post =>
    dispach(receivePost(post))
  );

export const deleteComment = id => dispatch =>
  CommentApiUtil.deleteComment(id).then(post => dispatch(receivePost(post)));
