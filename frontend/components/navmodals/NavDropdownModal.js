import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session';

const NavDropdownModal = ({ logout }) => 
  <div className="modal-box dropdown-modal">
    <div className="white-modal-triangle dropdown-tri" />
    <h3 className="modal-header">More Options</h3>
    <ul>
      <li onClick={logout} className="modal-list-item">
        <Link to="/">Log Out</Link>
      </li>
    </ul>
  </div>;

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(NavDropdownModal);
