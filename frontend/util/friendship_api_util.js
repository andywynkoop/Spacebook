export const requestFriend = friendship =>
  $.ajax({
    method: 'POST',
    url: 'api/friendships',
    data: { friendship }
  });

export const approveRequest = friendshipId =>
  $.ajax({
    method: 'PATCH',
    url: `api/friendships/${friendshipId}`
  });

export const deleteRequest = friendshipId =>
  $.ajax({
    method: 'DELETE',
    url: `api/friendships/${friendshipId}`
  });
