import React, { Component } from 'react';
import LoginRecentLogins from './LoginRecentLogins';
import LoginNewAccount from './LoginNewAccount';

class Login extends Component {
  render() {
    return (
      <div className="login-main">
        <LoginRecentLogins />
        <LoginNewAccount />
      </div>
    );
  }
}

export default Login;
