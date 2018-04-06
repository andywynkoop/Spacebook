import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cover from './Cover';
import ProfileNav from './ProfileNav';
import MainPage from './MainPage';
import About from './About';
import NavMain from '../NavMain';
import { fetchUser } from '../../actions/user';
const NULL_PROFILE =
  'http://res.cloudinary.com/dmynah8jz/image/upload/c_scale,w_653/v1523046075/no_face.png';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    const { userUrl } = this.props.match.params;
    this.props.fetchUser(this.props.match.params.userUrl);
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <NavMain />
        <div style={{ paddingTop: '42px' }}>
          <Cover />
          <ProfileNav profile={user ? user.profileImgUrl : NULL_PROFILE} />
          <MainPage>
            <About />
          </MainPage>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (
  { session: { currentUser }, entities: { users, userIdMap } },
  ownProps
) => {
  const id = userIdMap[ownProps.match.params.userUrl];
  return {
    currentUser,
    user: users[id]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: userUrl => dispatch(fetchUser(userUrl))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
