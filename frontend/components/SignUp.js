import React, { Component } from 'react';
import RecentLogins from './LoginRecentLogins';
import SignUp from './LoginNewAccount';

class SignUp extends Component {
  render() {
    return (
      <div className="login-main">
        <RecentLogins />
        <SignUp />
      </div>
    );
  }
}

export default SignUp;
