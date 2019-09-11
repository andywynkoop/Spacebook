import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_WALL_POSTS = 'RECEIVE_WALL_POSTS';
export const RECEIVE_FEED_POSTS = 'RECEIVE_FEED_POSTS';

export const createPost = postForm => dispatch =>
  PostApiUtil.createPost(postForm).then(post => dispatch({
    type: RECEIVE_POST,
    post
  }));

export const updatePost = postForm => dispatch =>
  PostApiUtil.updatePost(postForm).then(post => dispatch({
    type: RECEIVE_POST,
    post
  }));

export const deletePost = id => dispatch =>
  PostApiUtil.deletePost(id).then(post => dispatch({
    type: RECEIVE_POST,
    post
  }));

export const fetchWallPosts = id => dispatch =>
  PostApiUtil.fetchWallPosts(id).then(posts => dispatch({
      type: RECEIVE_WALL_POSTS,
      posts
    })
  );

export const fetchFeed = () => dispatch =>
  PostApiUtil.fetchFeed().then(posts => dispatch({
    type: RECEIVE_FEED_POSTS,
    posts
  }));



