import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import ErrorModal from './ErrorModal';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
  }

  update = field => e => this.setState({ [field]: e.target.value })

  render() {
    const message = this.props.errors.length > 0 
      ? 'The email or password you entered is incorrect.' : '';
    return (
      <div className="nav-login-container">
        <form className="nav-login-form" onSubmit={this.onSubmit}>
          <div>
            <label>Email or Phone</label>
            <br />
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        <a href="#">Forgot Account?</a>
        <ErrorModal field={'nav-session'} message={message} />
      </div>
    );
  }
}

const msp = ({ errors }) => ({ errors });

const mdp = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(msp, mdp)(LoginForm);