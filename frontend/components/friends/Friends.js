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
    console.log(friends);
    const firstNine = Object.values(friends).slice(0, 9);
    console.log(firstNine);
    return firstNine.map(friend => (
      <FriendCard key={friend.id} data={friend} />
    ));
  }
  render() {
    return (
      <div className="item-container">
        <h1>Friends</h1>
        <ul className="friends-list">{this.renderNineFriends()}</ul>
      </div>
    );
  }
}

export default Friends;
