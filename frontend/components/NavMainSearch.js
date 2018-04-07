import React, { Component } from 'react';

export default class NavMainSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }
  render() {
    return (
      <form
        className="nav-search"
        onSubmit={() =>
          console.log('Searchy search....', ` Looking for ${this.state.query}`)
        }
      >
        <input
          type="text"
          value={this.state.query}
          onChange={({ target: { value: query } }) => this.setState({ query })}
        />
        <button type="submit">
          <i className="fas fa-search" />
        </button>
      </form>
    );
  }
}
