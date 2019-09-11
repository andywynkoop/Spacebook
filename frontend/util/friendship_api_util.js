export const requestFriend = requestee_id =>
  $.ajax({
    method: 'POST',
    url: 'api/friend_requests',
    data: { requestee_id }
  });

export const approveRequest = friendshipId =>
  $.ajax({
    method: 'PATCH',
    url: `api/friend_requests/${friendshipId}`
  });

export const deleteRequest = friendshipId =>
  $.ajax({
    method: 'DELETE',
    url: `api/friend_requests/${friendshipId}`
  });
