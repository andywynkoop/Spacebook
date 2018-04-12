import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/ui';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import NavSession from './session/NavSession';
import NavIcon from './NavIcon';
import NavMainSearch from './NavMainSearch';
import { NULL_PROFILE } from '../util/img_util';
import NavModal from './navmodals/NavModal';

class NavMain extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps() {
    if (!this.props.currentUser) this.props.history.push('/');
  }

  render() {
    const { currentUser, logout, history } = this.props;
    const { modalType, openModal } = this.props;
    if (!currentUser) return <NavSession />;
    return (
      <div className="nav-main-wrapper">
        <nav className="nav-main">
          <div className="nav-main-header-wrapper">
            <div
              className="nav-header"
              onClick={() => {
                history.push('/');
              }}
            >
              <div className="header-t">
                <p>t</p>
              </div>
            </div>
            <NavMainSearch />
          </div>
          <ul>
            <Link to={`/${currentUser.userUrl}`}>
              <li className="nav-main-list-item nav-main-profile-btn">
                <img
                  src={currentUser.profileImgUrl || NULL_PROFILE}
                  className="nav-main-img"
                />

                <span>{currentUser.firstname}</span>
              </li>
            </Link>
            <span className="nav-break">|</span>

            <li
              className="nav-main-list-item nav-main-home"
              onClick={() => this.props.history.push('/')}
            >
              <Link to="/">Home</Link>
            </li>

            <NavIcon type="friend" select={openModal} selected={modalType} />
            <NavIcon type="message" select={openModal} selected={modalType} />
            <NavIcon
              type="notification"
              select={openModal}
              selected={modalType}
            />
            <span className="nav-break nav-break-2">|</span>
            <NavIcon type="question" select={openModal} selected={modalType} />
            <NavIcon type="dropdown" select={openModal} selected={modalType} />
          </ul>
        </nav>
        <NavModal />
      </div>
    );
  }
}

const mapStateToProps = ({ session: { currentUser }, ui }) => ({
  currentUser,
  modalType: ui.modal.type
});
const mapDispatchToProps = dispatch => ({
  openModal: type => dispatch(openModal(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(NavMain)
);
