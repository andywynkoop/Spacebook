import React, { Component } from 'react';

class FriendButton extends Component {
  render() {
    const { data } = this.props;
    let action = () => console.log(data);
    return (
      <div className="gray-page-button friend-button" onClick={action}>
        {'+ Add Friend'}
      </div>
    );
  }
}

export default FriendButton;
