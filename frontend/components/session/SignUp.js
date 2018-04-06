import React, { Component } from 'react';
import NavSession from './NavSession';
import NoRecentLogins from './NoRecentLogins';
import SignUpForm from './SignUpForm';

class SignUp extends Component {
  render() {
    const { signup, errors } = this.props;
    return (
      <div>
        <NavSession />
        <main className="signup-container">
          <NoRecentLogins />
          <SignUpForm signup={signup} serverErrors={errors} />
        </main>
      </div>
    );
  }
}

export default SignUp;
