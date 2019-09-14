import React, { Component } from 'react';
import {
  createUserFromState,
  monthNames,
  validateUser,
  errorMessages
} from '../../util/signup_form_util';
import ErrorModal from './ErrorModal';

class SignUpForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    birthdayMonth: 'Month',
    birthdayDay: 'Day',
    birthdayYear: 'Year',
    sex: null,
    errors: {},
    activeField: null
  }

  update = field => e => {
    this.setState({ [field]: e.target.value }, () => {
      const { errors } = this.state;
      if (!this.state[field]) errors[field] = errorMessages[field];
      if (this.state[field]) delete errors[field];

      if (['birthdayMonth', 'birthdayDay', 'birthdayYear'].includes(field))
        delete errors.birthday;

      this.setState({ errors });
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    let errors = {};
    this.setState({ errors });
    errors = validateUser(this.state);
    this.setState({ errors }, () => {
      if (Object.keys(errors).length === 0) {
        this.props.signup(createUserFromState(this.state));
      }
    });
  }

  serverErrors = () => {
    const { serverErrors } = this.props;
    const message =
      Object.keys(serverErrors).length === 0 ? '' : serverErrors[0];
    if (message && message != 'Invalid credentials') {
      return <div className="server-errors">{message}</div>;
    } else {
      return <div />;
    }
  }

  render = () =>
    <div className="signup">
      <h2>Sign Up</h2>
      <h4>{"It's free and always will be."}</h4>
      {this.serverErrors.bind(this)()}
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          className={errors.firstname ? 'input-small error' : 'input-small'}
          placeholder="First name"
          value={this.state.firstname}
          onChange={this.update('firstname')}
          onClick={() => this.setState({ activeField: 'firstname' })}
        />
        <input
          type="text"
          className={errors.lastname ? 'input-small error' : 'input-small'}
          placeholder="Last name"
          value={this.state.lastname}
          onChange={this.update('lastname')}
          onClick={() => this.setState({ activeField: 'lastname' })}
        />
        <input
          type="text"
          className={errors.email ? 'input-large error' : 'input-large'}
          placeholder="Mobile number or email"
          value={this.state.email}
          onChange={this.update('email')}
          onClick={() => this.setState({ activeField: 'email' })}
        />
        <input
          type="password"
          className={errors.password ? 'input-large error' : 'input-large'}
          placeholder="New password"
          value={this.state.password}
          onChange={this.update('password')}
          onClick={() => this.setState({ activeField: 'password' })}
        />
        <h4>Birthday</h4>
        <div className="birthday-container">
          <div
            className="signup-birthday"
            onClick={() => this.setState({ activeField: 'birthday' })}
          >
            <select
              value={this.state.birthdayMonth}
              onChange={this.update('birthdayMonth')}
              className={errors.birthday ? 'error' : ''}
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
              className={errors.birthday ? 'error' : ''}
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
              className={errors.birthday ? 'error' : ''}
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
        <div
          className="sex"
          onClick={() => this.setState({ activeField: 'sex' })}
        >
          <label className={errors.sex ? 'error' : ''}>
            <input
              type="radio"
              checked={this.state.sex === 'Female'}
              value={'Female'}
              onChange={this.update('sex')}
            />
            Female
          </label>

          <label className={errors.sex ? 'error' : ''}>
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
        <ErrorModal
          message={this.state.errors[this.state.activeField]}
          field={this.state.activeField}
        />
      </form>
    </div>
  
}

export default SignUpForm;