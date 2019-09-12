import React from 'react';
import NavSession from './NavSession';
import NoRecentLogins from './NoRecentLogins';
import SignUpForm from './SignUpForm';

const SignUp = ({ signup, errors }) => 
  <div>
    <NavSession />
    <main className="signup-container">
      <NoRecentLogins />
      <SignUpForm signup={signup} serverErrors={errors} />
    </main>
  </div>

export default SignUp;
