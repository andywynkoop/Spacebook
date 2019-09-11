import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_WALL_POSTS = 'RECEIVE_WALL_POSTS';
export const RECEIVE_FEED_POSTS = 'RECEIVE_FEED_POSTS';

export const createPost = postForm => dispatch =>
  PostApiUtil.createPost(postForm).then(payload => dispatch({
    type: RECEIVE_POST,
    payload
  }));

export const updatePost = postForm => dispatch =>
  PostApiUtil.updatePost(postForm).then(payload => dispatch({
    type: RECEIVE_POST,
    payload
  }));

export const deletePost = id => dispatch =>
  PostApiUtil.deletePost(id).then(payload => dispatch({
    type: RECEIVE_POST,
    payload
  }));

export const fetchWallPosts = id => dispatch =>
  PostApiUtil.fetchWallPosts(id).then(payload => dispatch({
      type: RECEIVE_WALL_POSTS,
      payload
    })
  );

export const fetchFeed = id => dispatch =>
  PostApiUtil.fetchFeed(id).then(payload => dispatch({
    type: RECEIVE_FEED_POSTS,
    payload
  }));