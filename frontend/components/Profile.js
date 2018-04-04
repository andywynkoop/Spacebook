import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h1>
            This is the profile page for {this.props.match.params.userURL}
          </h1>
        </Link>
      </div>
    );
  }
}

export default Profile;
