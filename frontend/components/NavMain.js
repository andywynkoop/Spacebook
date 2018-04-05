import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session';

class NavMain extends Component {
  render() {
    const { currentUser, logout } = this.props;
    return (
      <div className="nav-main">
        <nav>
          <h1>Hello, {currentUser.firstname}</h1>
          <button onClick={logout}>Log Out</button>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ session: { currentUser } }) => ({ currentUser });
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMain);
