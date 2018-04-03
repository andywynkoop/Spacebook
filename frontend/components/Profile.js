import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>This is the profile page for {this.props.match.params.userURL}</h1>
      </div>
    );
  }
}

export default Profile;
