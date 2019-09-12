import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.preloaded) {
    const { user } = window.preloaded;
    const id = Object.keys(user)[0];
    const userFriendships = window.preloaded.userFriendships || {};
    const friendMap = userFriendships.friendMap || {};
    const friends = userFriendships.friends || {};
    const friendRequests = window.preloaded.friendRequests || {};
    const friendRequestTo = friendRequests.requestsTo || {};
    const friendRequestFrom = friendRequests.requestsFrom || {};
    const requestors = friendRequests.users || {};
    const users = Object.assign({}, requestors, friends, user);
    preloadedState = {
      session: {
        id
      },
      entities: {
        users,
        userFriendshipMap: friendMap,
        friendRequestTo,
        friendRequestFrom
      }
    }
  }

  ReactDOM.render(
    <Root preloadedState={preloadedState} />,
    document.querySelector('#root')
  );
});
