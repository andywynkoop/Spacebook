import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
  render() {
    return (
      <div className="nav-login-container">
        <form className="nav-login-form">
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

export default LoginForm;
