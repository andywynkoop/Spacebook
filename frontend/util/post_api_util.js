export const createPost = post =>
  $.ajax({
    method: 'POST',
    url: 'api/posts',
    data: { post }
  });

export const fetchWallPosts = id =>
  $.ajax({
    method: 'GET',
    url: `api/users/${id}/wall`
  });

export const fetchFeed = id =>
  $.ajax({
    method: 'GET',
    url: `api/users/${id}/feed`
  });

