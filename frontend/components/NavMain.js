import React, { Component } from 'react';
import LoginForm from './LoginForm';

class NavMain extends Component {
  render() {
    return (
      <div className="nav-main-blue-bar">
        <nav className="nav-main">
          <h1 className="logo-main">myface</h1>
          <LoginForm />
        </nav>
      </div>
    );
  }
}

export default NavMain;
