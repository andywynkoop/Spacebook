import React, { Component } from 'react';
import { createUserFromState, monthNames } from '../../util/signup_form_util';

class LoginNewAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      birthdayMonth: 'Month',
      birthdayDay: 'Day',
      birthdayYear: 'Year',
      sex: null
    };
  }
  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();

    this.props.signup(createUserFromState(this.state));
  }
  render() {
    return (
      <div className="signup">
        <h2>Sign Up</h2>
        <h4>{"It's free and always will be."}</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            className="input-small"
            placeholder="First name"
            value={this.state.firstname}
            onChange={this.update('firstname')}
          />
          <input
            type="text"
            className="input-small"
            placeholder="Last name"
            value={this.state.lastname}
            onChange={this.update('lastname')}
          />
          <input
            type="text"
            className="input-large"
            placeholder="Mobile number or email"
            value={this.state.email}
            onChange={this.update('email')}
          />
          <input
            type="text"
            className="input-large"
            placeholder="New password"
            value={this.state.password}
            onChange={this.update('password')}
          />
          <h4>Birthday</h4>
          <div className="birthday-container">
            <div className="signup-birthday">
              <select
                value={this.state.birthdayMonth}
                onChange={this.update('birthdayMonth')}
              >
                <option value={null}>Month</option>
                {Array.from(new Array(12), (val, index) => index).map(month => (
                  <option key={`mo${month}`} value={month}>
                    {monthNames[month]}
                  </option>
                ))}
              </select>
              <select
                value={this.state.birthdayDay}
                onChange={this.update('birthdayDay')}
              >
                <option value={null}>Day</option>
                {Array.from(new Array(31), (val, index) => index + 1).map(
                  day => (
                    <option key={`da${day}`} value={day}>
                      {day}
                    </option>
                  )
                )}
              </select>
              <select
                value={this.state.birthdayYear}
                onChange={this.update('birthdayYear')}
              >
                <option value={null}>Year</option>
                {Array.from(new Array(100), (val, index) => index)
                  .reverse()
                  .map(num => num + 1918)
                  .map(year => (
                    <option key={`yr${year}`} value={year}>
                      {year}
                    </option>
                  ))}
              </select>
            </div>
            <div className="birthday-info pseudo-link">
              <p>Why do I need to provide my birthday?</p>
            </div>
          </div>
          <div className="sex">
            <span>
              <label>
                <input
                  type="radio"
                  checked={this.state.sex === 'Female'}
                  value={'Female'}
                  onChange={this.update('sex')}
                />
                Female
              </label>
            </span>
            <label>
              <input
                type="radio"
                checked={this.state.sex === 'Male'}
                value={'Male'}
                onChange={this.update('sex')}
              />
              Male
            </label>
          </div>
          <div className="sign-up-disclaimer">
            By clicking Create Account, you agree to our{' '}
            <span className="pseudo-link">Terms</span> and that you have read
            our <span className="pseudo-link">Data Policy</span>, including our{' '}
            <span className="pseudo-link">Cookie Use</span>. You may receive SMS
            Notifications from Facebook and can opt out at any time.
          </div>
          <button type="submit" className="signup-button">
            Create Account
          </button>
        </form>
      </div>
    );
  }
}

export default LoginNewAccount;