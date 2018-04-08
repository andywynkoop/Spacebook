export const requestFriend = (currentUserId, targetUserId) =>
  $.ajax({
    method: 'POST',
    url: 'api/friendships',
    data: {}
  });

