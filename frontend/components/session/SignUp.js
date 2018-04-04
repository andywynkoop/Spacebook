import React, { Component } from 'react';
import NavSession from './NavSession';
import RecentLogins from './RecentLogins';
import SignUpForm from './SignUpForm';

class SignUp extends Component {
  render() {
    return (
      <div>
        <NavSession />
        <main className="signup-container">
          <RecentLogins />
          <SignUpForm />
        </main>
      </div>
    );
  }
}

export default SignUp;
