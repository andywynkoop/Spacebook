import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class NavMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }
  componentDidMount() {
    if (!this.props.currentUser) this.props.history.push('/');
  }
  render() {
    const { currentUser, logout } = this.props;
    if (!currentUser) return <div />;
    return (
      <div className="nav-main-wrapper">
        <nav className="nav-main">
          <div className="nav-main-header-wrapper">
            <div className="nav-header" onClick={this.props.logout}>
              <div>t</div>
            </div>
            <form
              className="nav-search"
              onSubmit={() =>
                console.log(
                  'Searchy search....',
                  ` Looking for ${this.state.query}`
                )
              }
            >
              <input
                type="text"
                value={this.state.query}
                onChange={({ target: { value: query } }) =>
                  this.setState({ query })
                }
              />
              <button type="submit">
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
          <ul>
            <Link to={`/${currentUser.userUrl}`}>
              <li style={{ display: 'flex' }}>
                <img
                  src={
                    'http://res.cloudinary.com/dmynah8jz/image/upload/c_scale,w_367/v1522968300/20170422_150306.jpg'
                  }
                  className="nav-main-img"
                />

                {currentUser.firstname}
              </li>
            </Link>
            |
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
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
