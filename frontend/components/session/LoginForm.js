import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import ErrorModal from './ErrorModal';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      message: ''
    };
  }
  onSubmit(e) {
    const { email, password } = this.state;
    e.preventDefault();
    let message = '';
    if (!email || !password || this.props.errors) {
      console.log(email, password, this.props.errors);
      message = 'The email or password you entered is incorrect.';
    }
    this.setState({ message }, () => {
      if (!message) this.props.login(this.state);
    });
  }
  render() {
    if (this.props.errors) console.log(this.props.errors);
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
        <ErrorModal field={'nav-session'} message={this.state.message} />
      </div>
    );
  }
}
const mapStateToProps = ({ errors }) => ({ errors });
const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(LoginForm);
