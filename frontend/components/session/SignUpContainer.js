import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import SignUp from './SignUp';

const mapStateToProps = ({ session: { currentUser }, errors }) => ({
  currentUser,
  errors
});
const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
