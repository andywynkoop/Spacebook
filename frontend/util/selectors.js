export const currentUser = ({ entities, session }) => 
  entities.users[session.id];

export const userByUserUrl = ({ entities: { users, userIdMap } }, userUrl) => 
  users[userIdMap[userUrl]];

export const userByUserId = ({ entities: { users }}, userId) =>
  users[userId]

export const friendsByUserId = ({ entities: { users, userFriendshipMap }}, id) => 
  (userFriendshipMap[id] || []).map(id => users[id]);

const sort = posts => posts.sort((p1, p2) => {
  if (p1.createdAt < p2.createdAt) return 1;
  return -1;
});

export const sortFeed = state => 
  sort(Object.values(state.entities.feed));

export const commentsByPostId = (state, id) => {
  return (state.entities.postCommentMap[id] || [])
    .map(commentId => state.entities.comments[commentId])
}
  
export const userHasRequestedFriendship = (state, userId) => {
  if (!userId) return false;
  const requestedUserIds = Object
    .values(state.entities.friendRequestTo)
    .map(req => req.id);
  if (requestedUserIds.includes(userId)) return true;
  return false;
}

export const userHasRequestFrom = (state, userId) => {
  if (!userId) return false;
  const pendingRequests = state.entities.friendRequestFrom;
  const friendAskingIds = Object
    .values(pendingRequests)
    .map(req => req.id);
  if (friendAskingIds.includes(userId)) return pendingRequests[userId];
  return false;
}
export const userIsFriendsWith = (state, userId) => {
  if (!userId) return false;
  const currentUserId = state.session.id;
  if (currentUserId == userId) return true;
  const friendIds = state.entities.userFriendshipMap[currentUserId];
  if (friendIds.includes(userId)) return true;
  return false;
}

export const friendRequests = state => {
  const { users, friendRequestFrom } = state.entities;
  const requests = Object.values(friendRequestFrom);
  return requests.map(request => {
    request.user = users[request.requestorId];
    return request;
  });
}
