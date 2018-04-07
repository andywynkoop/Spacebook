import React, { Component } from 'react';

export default class NavIcon extends Component {
  render() {
    const { type, selected, select } = this.props;
    let className = selected === type ? '-active' : '';
    return (
      <li
        className="nav-main-list-item nav-icon-container"
        onClick={() => select(type)}
      >
        <div className={`nav-icon ni-${type}${className}`} />
      </li>
    );
  }
}
