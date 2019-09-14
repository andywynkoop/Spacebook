import React, { Component } from 'react';
import FriendCard from './FriendCard';

class Friends extends Component {
  render() {
    const { count, friends } = this.props;
    if (!friends) return null;
    return (
      <div className="item-container">
        <h1>
          Friends · <span style={{ color: '#8F949B' }}>{count}</span>
        </h1>
        <ul className="friends-list">
          {friends.map(friend => (
            <FriendCard key={friend.id} data={friend} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Friends;
