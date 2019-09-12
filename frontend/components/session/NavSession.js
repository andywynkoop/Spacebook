import React from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';

const NavSession = () => 
  <div className="nav-session-blue-bar">
    <nav className="nav-session">
      <Link to="/">
        <h1 className="logo-session">spacebook</h1>
      </Link>
      <LoginForm />
    </nav>
  </div>

export default NavSession;
