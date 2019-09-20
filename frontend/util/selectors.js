export const currentUser = ({ entities, session }) =>
	entities.users[session.id];

export const userByUserUrl = ({ entities: { users, userIdMap } }, userUrl) =>
	users[userIdMap[userUrl]];

export const userByUserId = ({ entities: { users } }, userId) => users[userId];

export const friendsByUserId = (
	{ entities: { users, userFriendshipMap } },
	id
) => (userFriendshipMap[id] || []).map(id => users[id]);

const sort = posts =>
	posts.sort((p1, p2) => {
		if (p1.createdAt < p2.createdAt) return 1;
		return -1;
	});

const sortReverse = posts =>
	posts.sort((p1, p2) => {
		if (p1.createdAt > p2.createdAt) return 1;
		return -1;
	});

export const sortFeed = state => sort(Object.values(state.entities.feed));

export const sortPosts = state => sort(Object.values(state.entities.posts));

export const commentsByPostId = (state, id) => {
	return (state.entities.postCommentMap[id] || []).map(
		commentId => state.entities.comments[commentId]
	);
};

export const userHasRequestedFriendship = (state, userId) => {
	if (!userId) return false;
	const request = Object.values(state.entities.friendRequestTo).filter(
		req => req.requesteeId === userId
	)[0];
	if (request) return request;
	return false;
};

export const userHasRequestFrom = (state, userId) => {
	if (!userId) return false;
	const pendingRequests = state.entities.friendRequestFrom;
	const friendAskingIds = Object.values(pendingRequests).map(
		req => req.requestorId
	);

	if (friendAskingIds.includes(userId)) return pendingRequests[userId];
	return false;
};
export const userIsFriendsWith = (state, userId) => {
	if (!userId) return false;
	const currentUserId = state.session.id;
	if (currentUserId == userId) return true;
	const friendIds = state.entities.userFriendshipMap[currentUserId];
	if (friendIds.includes(userId)) return true;
	return false;
};

export const friendRequests = state => {
	const { users, friendRequestFrom } = state.entities;
	const requests = Object.values(friendRequestFrom);
	return requests.map(request => {
		request.user = users[request.requestorId];
		return request;
	});
};

export const searchResults = state =>
	state.entities.search.map(id => state.entities.users[id]);

const shuffle = arr => {
	for (let i = 0; i < arr.length; i++) {
		let j = Math.floor(Math.random() * (arr.length - 1));
		let f1 = arr[i];
		arr[i] = arr[j];
		arr[j] = f1;
	}
	return arr;
};

export const shuffleAndTakeNine = friends =>
	shuffle(Object.values(friends)).slice(0, 9);

export const chatList = state => {
	const { chats, chatFriendMap, users, messages } = state.entities;
	const allChats = Object.values(chats);
	const { chatToFriend } = chatFriendMap;
	return allChats.map(chat => {
		chat = Object.assign({}, chat);
		const friendId = chatToFriend[chat.id];
		chat.friend = users[friendId];
		const allMessages = Object.values(messages).filter(
			m => m.chatId === chat.id
		);
		chat.lastMessage = allMessages[allMessages.length - 1];
		chat.lastMessageIsFromUser =
			chat.lastMessage.userId == state.session.id;
		return chat;
	});
};

export const messagesUnderChatId = state => {
	const allMessages = Object.values(state.entities.messages);
	const chatObj = {};
	allMessages.forEach(message => {
		const { chatId } = message;
		if (!chatObj[chatId]) chatObj[chatId] = [];
		chatObj[chatId].push(message);
	});
	return chatObj;
};

export const friendsOfCurrentUser = state =>
	friendsByUserId(state, currentUser(state).id);

export const openChats = state => {
	const allFriendIds = Object.keys(state.ui.chatModalList);
	// refactor me to use real chats later
	return allFriendIds.map(id => state.entities.users[id]);
};

export const chatByFriendId = (
	{ entities: { chatFriendMap, chats } },
	friendId
) => {
	return chats[chatFriendMap.friendToChat[friendId]] || null;
};

export const messagesByFriendId = ({ entities, session }, friendId) => {
	const { messageChatMap, messages, chatFriendMap, users } = entities;
	const { id: currentUserId } = session;
	const messageIds =
		messageChatMap[chatFriendMap.friendToChat[friendId]] || [];
	return sortReverse(
		messageIds.map(id => {
			const message = messages[id];
			message.authorImg = users[message.userId].profileImgUrl;
			const isCurrentUser = message.userId == currentUserId;
			message.side = isCurrentUser ? 'right' : 'left';
			return message;
		})
	);
};

export const dayAndMonth = dateString =>
	new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(
		new Date(dateString)
	);

export const dayMonthAndYear = dateString =>
	new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	}).format(new Date(dateString));
