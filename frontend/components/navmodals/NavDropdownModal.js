import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { logout } from '../../actions/session';

class NavDropdownModal extends Component {
  render() {
    return (
      <div className="modal-box dropdown-modal">
        <div className="white-modal-triangle dropdown-tri" />
        <h3 className="modal-header">More Options</h3>
        <ul>
          <li onClick={this.props.logout} className="modal-list-item">
            <Link to="/">Log Out</Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(withRouter(NavDropdownModal));
