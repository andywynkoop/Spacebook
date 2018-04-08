export const requestFriend = friend =>
  $.ajax({
    method: 'POST',
    url: 'api/friendships',
    data: { friend }
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

