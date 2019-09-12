import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import NavSession from './session/NavSession';
import NavIcon from './NavIcon';
import NavMainSearch from './NavMainSearch';
import { NULL_PROFILE } from '../util/img_util';
import NavModal from './navmodals/NavModal';
import { currentUser } from '../util/selectors';

const NavMain = ({ currentUser, history }) => {
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
              <p>s</p>
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
            onClick={() => history.push('/')}
          >
            <Link to="/">Home</Link>
          </li>
          {['friend', 'message', 'notification'].map(type => 
            <NavIcon key={type} type={type} />
          )}
          <span className="nav-break nav-break-2">|</span>
          {['question', 'dropdown'].map(type =>
            <NavIcon key={type} type={type} />
          )}
        </ul>
      </nav>
      <NavModal />
    </div>
  );
}

const msp = state => ({
  currentUser: currentUser(state)
});

export default connect(msp)(
  withRouter(NavMain)
);
