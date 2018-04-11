import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_WALL_POSTS = 'RECEIVE_WALL_POSTS';
export const RECEIVE_FEED_POSTS = 'RECEIVE_FEED_POSTS';

export const createPost = postForm => dispatch =>
  PostApiUtil.createPost(postForm).then(post => dispatch(receivePost(post)));

export const updatePost = postForm => dispatch =>
  PostApiUtil.updatePost(postForm).then(post => dispatch(receivePost(post)));

export const deletePost = id => dispatch => PostApiUtil.deletePost(id);

export const fetchWallPosts = id => dispatch =>
  PostApiUtil.fetchWallPosts(id).then(
    posts => dispatch(receiveWallPosts(posts)),
    err => console.log(err.responseJSON)
  );

export const fetchFeed = id => dispatch =>
  PostApiUtil.fetchFeed(id).then(posts => dispatch(receiveFeedPosts));

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const receiveWallPosts = posts => ({
  type: RECEIVE_WALL_POSTS,
  posts
});

export const receiveFeedPosts = posts => ({
  type: RECEIVE_FEED_POSTS,
  posts
});
