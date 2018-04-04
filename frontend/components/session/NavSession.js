import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Link, withRouter } from 'react-router-dom';

class NavSession extends Component {
  render() {
    return (
      <div className="nav-session-blue-bar">
        <nav className="nav-session">
          <Link to="/A/Andy">
            <h1 className="logo-session">thoughtbook</h1>
          </Link>
          <LoginForm />
        </nav>
      </div>
    );
  }
}

export default withRouter(NavSession);
