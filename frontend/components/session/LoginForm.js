import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }
  render() {
    return (
      <div className="nav-login-container">
        <form className="nav-login-form" onSubmit={this.onSubmit.bind(this)}>
          <div>
            <label>Email or Phone</label>
            <br />
            <input
              type="text"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        <a href="#">Forgot Account?</a>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(LoginForm);
