import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/ui';

class NavIcon extends Component {
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

const mapStateToProps = ({ ui }) => ({
  selected: ui.modal.type
})
const mapDispatchToProps = dispatch => ({
  select: type => dispatch(openModal(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavIcon)