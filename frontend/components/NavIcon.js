import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/ui';

const NavIcon = ({ type, selected, select }) =>
  <li
    className="nav-main-list-item nav-icon-container"
    onClick={() => select(type)}
  >
    <div className={
      `nav-icon ni-${type}${selected === type ? '-active' : ''}`
    } />
  </li>


const msp = ({ ui }) => ({
  selected: ui.modal.type
})
const mdp = dispatch => ({
  select: type => dispatch(openModal(type))
})

export default connect(msp, mdp)(NavIcon)