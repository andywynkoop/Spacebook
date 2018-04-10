import * as CommentApiUtil from '../util/comment_api_util';
import { receivePost } from './post';

export const addComment = comment => dispatch =>
  CommentApiUtil.addComment(comment).then(post => dispatch(receivePost(post)));
