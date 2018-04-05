import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';

const DemoModal = props => {
  return (
    <div
      className="demo-modal"
      onClick={() => {
        props.loginUser({
          email: 'demo_user@email.com',
          password: 'password'
        });
      }}
    >
      <h1>
        Want to try the site before registering? Click here to sign in as a demo
        user.
      </h1>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(DemoModal);
