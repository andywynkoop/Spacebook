import React, { Component } from 'react';

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
      birthdayYear: 'Year'
    };
  }
  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const {
      firstname,
      lastname,
      email,
      password,
      birthdayMonth: month,
      birthdayDay: day,
      birthdayYear: year
    } = this.state;

    const userData = {
      firstname,
      lastname,
      email,
      password,
      birthday: new Date(year, month, day)
    };

    this.props.signup(userData);
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
          <div>
            <select
              value={this.state.birthdayMonth}
              onChange={this.update('birthdayMonth')}
            >
              {Array.from(new Array(12), (val, index) => index).map(month => (
                <option key={`mo${month}`} value={month}>
                  {month + 1}
                </option>
              ))}
            </select>
            <select
              value={this.state.birthdayDay}
              onChange={this.update('birthdayDay')}
            >
              {Array.from(new Array(31), (val, index) => index).map(day => (
                <option key={`da${day}`} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <select
              value={this.state.birthdayYear}
              onChange={this.update('birthdayYear')}
            >
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
          <button type="submit">Create Account</button>
        </form>
      </div>
    );
  }
}

export default LoginNewAccount;
