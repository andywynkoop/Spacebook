import React, { Component } from 'react';
import FriendCard from './FriendCard';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.renderNineFriends = this.renderNineFriends.bind(this);
  }
  renderNineFriends() {
    const { friends } = this.props;
    delete friends['ownId'];
    const firstNine = Object.values(friends).slice(0, 9);
    return firstNine.map(friend => (
      <FriendCard key={friend.id} data={friend} />
    ));
  }
  render() {
    const friendCount = Object.keys(this.props.friends).length;
    return (
      <div className="item-container">
        <h1>
          Friends · <span style={{ color: '#8F949B' }}>{friendCount}</span>
        </h1>
        <ul className="friends-list">{this.renderNineFriends()}</ul>
      </div>
    );
  }
}

export default Friends;
