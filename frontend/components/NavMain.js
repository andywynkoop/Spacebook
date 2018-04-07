import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import NavSession from './session/NavSession';
import NavIcon from './NavIcon';
import NavMainSearch from './NavMainSearch';

class NavMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
    this.selectIcon = this.selectIcon.bind(this);
  }
  componentWillReceiveProps() {
    console.log('called');
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
              <div>t</div>
            </div>
            <NavMainSearch />
          </div>
          <ul>
            <Link to={`/${currentUser.userUrl}`}>
              <li className="nav-main-list-item" style={{ display: 'flex' }}>
                <img
                  src={
                    'http://res.cloudinary.com/dmynah8jz/image/upload/c_scale,w_367/v1522968300/20170422_150306.jpg'
                  }
                  className="nav-main-img"
                />

                {currentUser.firstname}
              </li>
            </Link>
            <span className="nav-break">|</span>
            <li className="nav-main-list-item" id="nav-home">
              Home
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
            <span className="nav-break">|</span>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ session: { currentUser } }) => ({ currentUser });
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(NavMain)
);
