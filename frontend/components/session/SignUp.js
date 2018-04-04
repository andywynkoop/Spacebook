import React, { Component } from 'react';
import NavSession from './NavSession';
import NoRecentLogins from './NoRecentLogins';
import SignUpForm from './SignUpForm';

class SignUp extends Component {
  render() {
    return (
      <div>
        <NavSession />
        <main className="signup-container">
          <NoRecentLogins />
          <SignUpForm signup={this.props.signup} />
        </main>
      </div>
    );
  }
}

export default SignUp;
