import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import NavSession from './session/NavSession';
import NavIcon from './NavIcon';
import NavMainSearch from './NavMainSearch';
import { NULL_PROFILE } from '../util/img_util';

class NavMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
    this.selectIcon = this.selectIcon.bind(this);
  }
  componentWillReceiveProps() {
    if (!this.props.currentUser) this.props.history.push('/');
  }
  selectIcon(selected) {
    this.setState({ selected });
  }
  render() {
    const { currentUser, logout, history } = this.props;
    const { selected } = this.state;
    if (!currentUser) return <NavSession />;
    return (
      <div className="nav-main-wrapper">
        <nav className="nav-main">
          <div className="nav-main-header-wrapper">
            <div
              className="nav-header"
              onClick={() => {
                logout();
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

            <li className="nav-main-list-item nav-main-home">
              <Link to="/">Home</Link>
            </li>

            <NavIcon
              type="friend"
              select={this.selectIcon}
              selected={selected}
            />
            <NavIcon
              type="message"
              select={this.selectIcon}
              selected={selected}
            />
            <NavIcon
              type="notification"
              select={this.selectIcon}
              selected={selected}
            />
            <span className="nav-break nav-break-2">|</span>
            <NavIcon
              type="question"
              select={this.selectIcon}
              selected={selected}
            />
            <NavIcon
              type="dropdown"
              select={this.selectIcon}
              selected={selected}
            />
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ session: { currentUser } }) => ({ currentUser });
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestFriend: (currentUserId, targetUserId) =>
    dispatch(requestFriend(currentUserId, targetUserId))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(NavMain)
);
