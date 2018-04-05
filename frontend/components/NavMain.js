import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session';

class NavMain extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="nav-main">
        <nav>
          <h1>Hello, {currentUser.email}</h1>
          <button
            onClick={() => {
              console.log('logging out');
              this.props.logout();
            }}
          >
            Log Out
          </button>
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
