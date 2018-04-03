import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { withRouter } from 'react-router-dom';

class NavSession extends Component {
  render() {
    return (
      <div className="nav-main-blue-bar">
        <nav className="nav-main">
          <h1 className="logo-main">ThoughtSpot</h1>
          <LoginForm />
        </nav>
      </div>
    );
  }
}

export default withRouter(NavSession);
