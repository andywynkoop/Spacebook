import React, { Component } from 'react';

class LoginNewAccount extends Component {
  render() {
    return (
      <div className="login-new-account">
        <h2>Create a New Account</h2>
        <h4>{"It's free and always will be."}</h4>
        <form>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="text" placeholder="Mobile number or Email" />
          <input type="text" placeholder="New password" />
        </form>
      </div>
    );
  }
}

export default LoginNewAccount;

