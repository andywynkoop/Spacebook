import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session';

class NavMain extends Component {
  render() {
    return (
      <div className="nav-main">
        <h1>{currentUser.email}</h1>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
}

const mapStateToProps = ({ session: { currentUser } }) => ({ currentUser });
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMain);
