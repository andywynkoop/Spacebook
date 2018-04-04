import React, { Component } from 'react';

class LoginNewAccount extends Component {
  render() {
    return (
      <div className="signup">
        <h2>Sign Up</h2>
        <h4>{"It's free and always will be."}</h4>
        <form>
          <input type="text" className="input-small" placeholder="First name" />
          <input type="text" className="input-small" placeholder="Last name" />
          <input
            type="text"
            className="input-large"
            placeholder="Mobile number or email"
          />
          <input
            type="text"
            className="input-large"
            placeholder="New password"
          />
        </form>
      </div>
    );
  }
}

export default LoginNewAccount;
