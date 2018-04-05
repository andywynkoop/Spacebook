import React, { Component } from 'react';
import NavSession from './NavSession';
import NoRecentLogins from './NoRecentLogins';
import SignUpForm from './SignUpForm';

class SignUp extends Component {
  render() {
    const { signup, errors } = this.props;
    const message = Object.keys(errors).length === 0 ? '' : errors[0];
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
